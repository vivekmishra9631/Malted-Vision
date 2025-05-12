import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const formSchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  collegeName: z.string()
    .min(2, "College name is required"),
  phoneNumber: z.string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long"),
});

export async function POST(request: Request) {
  try {
    console.log("🔵 Received influencer application request");

    const body = await request.json();
    console.log("🟢 Request body:", body);

    const validatedData = formSchema.parse(body);
    console.log("✅ Validated data:", validatedData);

    await prisma.$connect();
    console.log("✅ Database connection successful");

    // Ensure the table exists by querying its existence properly
    const tableExistsResult = await prisma.$queryRawUnsafe<any[]>(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'CampusInfluencer'
      );
    `);

    const tableExists = tableExistsResult[0]?.exists;
    console.log("📦 Table exists:", tableExists);

    if (!tableExists) {
      throw new Error("❌ CampusInfluencer table does not exist");
    }

    // Create entry
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
    console.error("🔥 Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
