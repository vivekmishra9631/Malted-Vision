import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  console.log("📩 Received contact form submission request");

  try {
    const body = await request.json();
    console.log("🟢 Request body:", body);

    // Validate the request body
    const validatedData = formSchema.parse(body);
    console.log("✅ Validated data:", validatedData);

    // Test database connection
    try {
      await prisma.$connect();
      console.log("✅ Database connection successful");
    } catch (dbError) {
      console.error("❌ Database connection error:", dbError);
      throw new Error("Failed to connect to database");
    }

    // Check if the ContactUs table exists
    const tableExistsResult = await prisma.$queryRawUnsafe<any[]>(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'ContactUs'
      );
    `);
    const tableExists = tableExistsResult[0]?.exists;
    console.log("📦 ContactUs table exists:", tableExists);

    if (!tableExists) {
      throw new Error("❌ ContactUs table does not exist in the database");
    }

    // Check for existing submission by email to avoid duplicates
    const existingContact = await prisma.contactUs.findFirst({
      where: { email: validatedData.email },
    });

    if (existingContact) {
      console.warn("⚠️ Email already submitted:", existingContact.email);
      return NextResponse.json(
        { message: "This email has already submitted a contact form" },
        { status: 409 }
      );
    }

    // Create the contact entry
    const contact = await prisma.contactUs.create({
      data: validatedData,
    });

    console.log("✅ Contact message created:", contact);

    return NextResponse.json(
      { message: "Message received", contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("🔥 Error in contact API:", error);
    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack available"
    );

    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    try {
      await prisma.$disconnect();
      console.log("🔌 Database connection closed");
    } catch (disconnectError) {
      console.error("❌ Error disconnecting from database:", disconnectError);
    }
  }
}