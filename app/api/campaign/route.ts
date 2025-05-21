import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma"; // Import from lib/prisma.ts

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Full name can only contain letters and spaces"),
  brandName: z
    .string()
    .min(2, "Brand name must be at least 2 characters")
    .max(50, "Brand name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  campaignBudget: z
    .string()
    .min(1, "Please select a budget range")
    .refine((val) => ["100-1k", "1k-5k", "5k-10k", "10k-25k", "25k+"].includes(val), {
      message: "Please select a valid budget range",
    }),
  cityCountry: z
    .string()
    .min(2, "Please enter your city and country")
    .max(100, "Location must be less than 100 characters"),
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  console.log("📩 Received campaign creation request");

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
        WHERE table_schema = 'public' AND table_name = 'Campaign'
      );
    `);
    const tableExists = tableExistsResult[0]?.exists;
    console.log("📦 Campaign table exists:", tableExists);

    if (!tableExists) {
      throw new Error("❌ Campaign table does not exist in the database");
    }

    const existingCampaign = await prisma.campaign.findFirst({
      where: { email: validatedData.email },
    });

    if (existingCampaign) {
      console.warn("⚠️ Email already used for a campaign:", existingCampaign.email);
      const response = NextResponse.json(
        { message: "Email already used for a campaign" },
        { status: 409 }
      );
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      response.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return response;
    }

    const campaign = await prisma.campaign.create({
      data: {
        fullName: validatedData.fullName,
        brandName: validatedData.brandName,
        email: validatedData.email,
        campaignBudget: validatedData.campaignBudget,
        cityCountry: validatedData.cityCountry,
      },
    });

    console.log("✅ Campaign created successfully:", campaign);

    const response = NextResponse.json(
      { message: "Campaign created successfully", campaign },
      { status: 201 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  } catch (error) {
    console.error("🔥 Error in campaign API:", error);
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