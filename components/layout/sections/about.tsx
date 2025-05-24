"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const AboutSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section
      id="about"
      className="container mx-auto py-12 xs:py-16 sm:py-24 md:py-32 min-h-[50vh] flex flex-col justify-center items-center"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-sm xs:text-base sm:text-lg text-primary text-center mb-1 xs:mb-2 sm:mb-3 tracking-wider">
          About Us
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Malted Vision
        </h1>
        <p className="max-w-screen-md mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
          Connecting Brands with Gen Z Through Authentic Voices
        </p>
      </div>

      <div className="bg-card border border-secondary rounded-2xl p-6 sm:p-8 max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex-1 space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Malted Vision is a dynamic startup dedicated to bridging the gap between brands and Gen Z audiences. Founded with a passion for authentic engagement, we specialize in creator-led campaigns, trend-driven strategies, and deep Gen Z insights to help brands resonate with the next generation.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Our mission is to empower brands to connect with Gen Z in meaningful ways by leveraging culture, trends, and the power of authentic voices. We work closely with creators and ambassadors to craft campaigns that are not only engaging but also culturally relevant.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            At Malted Vision, we envision a future where brands and Gen Z collaborate seamlessly to create impactful, trend-setting campaigns that drive engagement and build lasting connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button asChild variant="default" size="lg">
              <Link
                href="https://www.irs.gov/pub/irs-pdf/f1040.pdf" // Dummy PDF link
                download
                target="_blank" // Open in new tab to ensure download works
                rel="noopener noreferrer" // Security best practice for external links
              >
                Download Pitch Deck
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#team">Meet Our Team</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative group/hoverimg">
            <Image
              src={resolvedTheme === "dark" ? "/mvblack.png" : "/mvblack.png"}
              alt="Malted Vision Logo"
              width={200}
              height={200}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain transition-all duration-200 ease-linear group-hover/hoverimg:scale-[1.05]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};