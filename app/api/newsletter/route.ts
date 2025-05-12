import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest): Promise<NextResponse> {
  console.log("📥 Newsletter API triggered");

  try {
    const body = await req.json();
    const { email } = body;

    console.log("📨 Parsed body:", body);

    // Validate email format
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      console.warn("⚠️ Invalid email format received:", email);
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("✅ Email validated:", email);

    // Check if email already exists in the database
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      console.warn("⚠️ Email already subscribed:", email);
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Add new subscriber to the database
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });

    console.log("🎉 Subscription successful:", subscriber);

    return NextResponse.json(
      { message: "Successfully subscribed", subscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Newsletter API error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
