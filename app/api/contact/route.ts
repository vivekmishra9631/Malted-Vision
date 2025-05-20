// C:\Users\krish\Desktop\mVision\Malted-Vision\app\api\contact\route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    const validatedData = formSchema.parse(body);
    console.log("Validated data:", validatedData);

    console.log("Prisma client:", prisma);
    console.log("Prisma contactUs:", prisma.contactUs);

    const contact = await prisma.contactUs.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Message received", contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    console.error("Error stack:", error.stack);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Internal server error",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}