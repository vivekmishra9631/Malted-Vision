import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Use the shared Prisma client instance
import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  collegeName: z.string().min(2, "College name is required"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long"),
});

export async function POST(request: Request) {
  console.log("🔵 Received influencer application request");

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

    // Check if the table exists
    const tableExistsResult = await prisma.$queryRawUnsafe<any[]>(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'CampusInfluencer'
      );
    `);
    const tableExists = tableExistsResult[0]?.exists;
    console.log("📦 CampusInfluencer table exists:", tableExists);

    if (!tableExists) {
      throw new Error("❌ CampusInfluencer table does not exist in the database");
    }

    // Check for existing influencer by email to avoid duplicates
    const existingInfluencer = await prisma.campusInfluencer.findUnique({
      where: { email: validatedData.email },
    });

    if (existingInfluencer) {
      console.warn("⚠️ Email already registered:", existingInfluencer.email);
      return NextResponse.json(
        { message: "Email already registered as a campus influencer" },
        { status: 409 }
      );
    }

    // Create the influencer entry
    const influencer = await prisma.campusInfluencer.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        collegeName: validatedData.collegeName,
        phoneNumber: validatedData.phoneNumber,
      },
    });

    console.log("✅ Influencer application created:", influencer);

    return NextResponse.json(
      { message: "Application submitted successfully", influencer },
      { status: 201 }
    );
  } catch (error) {
    console.error("🔥 Error in influencer API:", error);

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