"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CampaignAIPage() {
  return (
    <div className="container min-h-screen flex flex-col items-center justify-center py-20">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Not sure what will work?
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Let AI do the strategy
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Get an instant, personalized marketing idea tailored to your brand and audience.
          </p>
        </div>

        <div className="relative group mt-8">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="relative bg-background/50 p-8 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              We&apos;re working hard to bring you AI-powered campaign strategies. Stay tuned for updates!
            </p>
          </div>
        </div>

        <div className="pt-8">
          <Button asChild variant="outline" className="group">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}