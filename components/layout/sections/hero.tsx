"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ArrowRight, Instagram, Youtube, Camera, TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { CampaignDialog } from "@/components/campaign-dialog";
import { CampusAmbassadorDialog } from "@/components/campus-ambassador-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const HeroSection = () => {
  const { theme } = useTheme();

  // Define the fade-in animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Data for previous work using your local assets
  const previousWork = [
    { type: "video", src: "/Video1.mp4", title: "Gen Z Campaign 2024" },
    { type: "image", src: "/Photo1.jpg", title: "Brand Activation Event" },
    { type: "video", src: "/Video2.mp4", title: "Product Launch Video" },
    { type: "image", src: "/Photo2.jpg", title: "Social Media Takeover" },
    { type: "image", src: "/Photo3.jpg", title: "Creative Workshop" },
    { type: "image", src: "/Photo4.jpg", title: "Live Event Snapshot" },
    { type: "image", src: "/Photo5.jpg", title: "Audience Engagement" },
    { type: "image", src: "/Photo6.jpg", title: "Audience Engagement" },
    { type: "image", src: "/Photo7.jpg", title: "Audience Engagement" },
    { type: "image", src: "/Photo8.jpg", title: "Audience Engagement" },
    { type: "image", src: "/Photo9.jpg", title: "Audience Engagement" },
    { type: "image", src: "/Photo10.jpg", title: "Audience Engagement" },
  ];

  return (
    <section className="container w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/80 opacity-60 blur-xl -z-10"></div>
      <motion.div
        className="grid place-items-center max-w-screen-xl gap-10 sm:gap-12 mx-auto py-20 sm:py-24 md:py-28 lg:py-32 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center space-y-10">
          <div className="max-w-screen-md mx-auto text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <h1>
              Connecting Brands with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text animate-pulse">
                Gen Z
              </span>
              Through Authentic Voices
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            We power campaigns that resonate with young audiences by tapping into culture, trends, and creator-led strategies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 w-full px-4">
            <CampaignDialog />
            <CampusAmbassadorDialog />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-bold text-base sm:text-lg bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 text-foreground border-2 border-primary/60 rounded-xl px-6 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Link href="/blog">GenZ Culture Lab</Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-16 sm:mt-20">
          <div className="absolute -top-12 lg:-top-16 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 sm:h-28 md:h-32 lg:h-40 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl -z-10"></div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Testimonials
          </h2>

          <div className="relative w-full max-w-screen-xl mx-auto rounded-xl border border-t-2 border-secondary border-t-primary/40 bg-background/90 p-6 sm:p-8 md:p-10 shadow-xl">
            <Carousel
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
                // slidesToShow: 1,
                // breakpoints: {
                //   "(min-width: 640px)": { slidesToShow: 2 },
                //   "(min-width: 1024px)": { slidesToShow: 3 },
                // },
              }}
              className="relative"
            >
              <CarouselContent className="pl-2 sm:pl-3 md:pl-4">
                {previousWork.map((work, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 md:basis-1/3 p-2 sm:p-3 md:p-4"
                  >
                    <motion.div
                      className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden bg-black/10"
                      initial={{ scale: 0.95 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    >
                      {work.type === "video" ? (
                        <video
                          src={work.src}
                          className="w-full h-full object-cover rounded-xl"
                          controls
                          muted
                          playsInline
                          preload="metadata"
                          onError={(e) =>
                            console.error("Video load error:", e, "for src:", work.src)
                          }
                        >
                          <p className="text-white text-center p-4">
                            Video failed to load. Check file or format.
                          </p>
                        </video>
                      ) : (
                        <Image
                          src={work.src}
                          alt={work.title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      )}
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                <CarouselPrevious className="pointer-events-auto bg-primary/10 border-none text-foreground hover:bg-primary/30 hover:text-white rounded-full p-2 sm:p-3 transition-all duration-300 -ml-3 sm:-ml-4" />
                <CarouselNext className="pointer-events-auto bg-primary/10 border-none text-foreground hover:bg-primary/30 hover:text-white rounded-full p-2 sm:p-3 transition-all duration-300 -mr-3 sm:-mr-4" />
              </div>
            </Carousel>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 md:h-32 lg:h-36 bg-gradient-to-t from-background/0 via-background/50 to-background/80 rounded-b-xl -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
};