import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import mailchimp from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp client
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., "us6"
});

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  console.log("📩 Received newsletter subscription request");

  try {
    const body = await req.json();
    console.log("🟢 Request body:", body);

    const validatedData = formSchema.parse(body);
    console.log("✅ Validated data:", validatedData);

    try {
      await prisma.$connect();
      console.log("✅ Database connection successful");
    } catch (dbError) {
      console.error("❌ Database connection error:", dbError);
      throw new Error("Failed to connect to database");
    }

    const tableExistsResult = await prisma.$queryRawUnsafe<any[]>(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'NewsletterSubscriber'
      );
    `);
    const tableExists = tableExistsResult[0]?.exists;
    console.log("📦 NewsletterSubscriber table exists:", tableExists);

    if (!tableExists) {
      throw new Error("❌ NewsletterSubscriber table does not exist in the database");
    }

    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email: validatedData.email },
    });

    if (existingSubscriber) {
      console.warn("⚠️ Email already subscribed in database:", existingSubscriber.email);
      const response = NextResponse.json(
        { message: "Email already subscribed" },
        { status: 409 }
      );
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      response.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return response;
    }

    // Add subscriber to the database
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email: validatedData.email },
    });
    console.log("✅ Newsletter subscription created in database:", subscriber);

    // Add subscriber to Mailchimp audience
    try {
      const audienceId = process.env.MAILCHIMP_AUDIENCE_ID!;
      const mailchimpResponse = await mailchimp.lists.addListMember(audienceId, {
        email_address: validatedData.email,
        status: "subscribed", // Use "pending" if you want double opt-in
      });
      console.log("✅ Added to Mailchimp audience:", mailchimpResponse);
    } catch (mailchimpError: any) {
      console.error("❌ Mailchimp Error:", mailchimpError.response?.text || mailchimpError.message);
      
      // Log the error but don't fail the request since database operation succeeded
      if (mailchimpError.response?.status === 400 && mailchimpError.response?.text) {
        const errorDetails = JSON.parse(mailchimpError.response.text);
        if (errorDetails.title === "Member Exists") {
          console.warn("⚠️ Email already exists in Mailchimp:", validatedData.email);
        }
      }
      // Optionally, you could store this error in the database for later review
    }

    const response = NextResponse.json(
      { message: "Successfully subscribed", subscriber },
      { status: 201 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  } catch (error) {
    console.error("🔥 Error in newsletter API:", error);
    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack available"
    );

    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
      const response = NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      response.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return response;
    }

    const response = NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  } finally {
    try {
      await prisma.$disconnect();
      console.log("🔌 Database connection closed");
    } catch (disconnectError) {
      console.error("❌ Error disconnecting from database:", disconnectError);
    }
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}