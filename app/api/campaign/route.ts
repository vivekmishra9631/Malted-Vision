import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const formSchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Full name can only contain letters and spaces"),
  brandName: z.string()
    .min(2, "Brand name must be at least 2 characters")
    .max(50, "Brand name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  campaignBudget: z.string()
    .min(1, "Please select a budget range")
    .refine((val) => ["100-1k", "1k-5k", "5k-10k", "10k-25k", "25k+"].includes(val), {
      message: "Please select a valid budget range",
    }),
  cityCountry: z.string()
    .min(2, "Please enter your city and country")
    .max(100, "Location must be less than 100 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received request body:", body);
    
    // Validate the request body
    const validatedData = formSchema.parse(body);
    console.log("Validated data:", validatedData);

    // Test database connection
    try {
      await prisma.$connect();
      console.log("Database connection successful");
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      throw new Error("Failed to connect to database");
    }

    // Create a new campaign in the database
    const campaign = await prisma.campaign.create({
      data: {
        fullName: validatedData.fullName,
        brandName: validatedData.brandName,
        email: validatedData.email,
        campaignBudget: validatedData.campaignBudget,
        cityCountry: validatedData.cityCountry,
      },
    });

    console.log("Campaign created successfully:", campaign);

    return NextResponse.json(
      { message: "Campaign created successfully", campaign },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating campaign:", error);
    
    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
      return NextResponse.json(
        { message: "Invalid request data", errors: error.errors },
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