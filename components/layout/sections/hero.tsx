"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Youtube, Camera, TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { CampaignDialog } from "@/components/campaign-dialog";
import { CampusAmbassadorDialog } from "@/components/campus-ambassador-dialog";
import { NewsletterDialog } from "@/components/newsletter-dialog";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center max-w-screen-xl gap-6 sm:gap-8 mx-auto py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <h1>
              Connecting Brands with
              <span className="text-transparent px-1 sm:px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Gen Z
              </span>
              Through Authentic Voices
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
            We power campaigns that resonate with young audiences by tapping into culture, trends, and creator-led strategies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full px-4">
            <CampaignDialog />
            <CampusAmbassadorDialog />
            <NewsletterDialog />
          </div>
        </div>

        <div className="relative group mt-10 sm:mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-16 sm:h-20 md:h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <div className="relative w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto rounded-lg border border-t-2 border-secondary border-t-primary/30 bg-background/80 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            {/* Gradient Background Card */}
            <div className="relative flex-1 h-56 sm:h-64 md:h-80 lg:h-96 rounded-lg bg-gradient-to-r from-[#D247BF] to-primary flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <div className="relative text-center text-white space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Creator-Driven Campaigns
                </h3>
                <p className="text-xs sm:text-sm md:text-base">
                  Engage Gen Z with authentic content on their favorite platforms.
                </p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  <Link
                    href="https://instagram.com/maltedvision"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </Link>
                  <Link
                    href="https://youtube.com/@maltedvision"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Youtube className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </Link>
                  <Link
                    href="https://maltedvision.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Camera className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </Link>
                  <Link
                    href="https://x.com/maltedvision"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Call-to-Action Card */}
            <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Ready to Amplify Your Brand?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Join 1000+ brands reaching Gen Z through our creator network.
              </p>
              <Button asChild variant="outline" className="group text-sm sm:text-base py-2 sm:py-3">
                <Link href="/" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};