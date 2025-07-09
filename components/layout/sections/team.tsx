"use client";

import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
  description?: string;
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
  
    {
      imageUrl: "/ceo.jpg",
      firstName: "Vivek",
      lastName: "Mishra",
      positions: ["CEO & Founder"],
      description: "Turning ‘meh’ into ‘send this to the group chat’ for brands.",
      socialNetworks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/vivek-mishra-27622a1b7/" },
        { name: "X", url: "https://x.com/VivekMi77834875" },
      ],
    },
    {
      imageUrl: "/cto.jpg",
      firstName: "Shrikrushna",
      lastName: "P.",
      positions: ["COO & Co-founder"],
      description: "Turning Gen Z chaos into campaign gold (and still finding time for chai).",
      socialNetworks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shrikrushna-r-prajapati-89a667334/" },
        { name: "X", url: "https://x.com/shrikrushna2004" },
      ],
    },
    {
      imageUrl: "/coo-m.jpg",
      firstName: "Manvendra",
      lastName: "Solanki",
      positions: ["COO"],
      description: "Strategic operations expert driving growth with precision.",
      socialNetworks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/manvendra-solanki/" },
        { name: "X", url: "https://x.com/manvendrasolanki" },
      ],
    },
    {
      imageUrl: "/mediahead.jpg",
      firstName: "Nikhil",
      lastName: "R.",
      positions: ["Creative Head"],
      description: "I don’t make ads—I make scroll-stoppers your ex shares.",
      socialNetworks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/nikhil-ranganekar-a63b88221/" },
        { name: "X", url: "https://x.com/nikhilranganekar" },
      ],
    },
    {
      imageUrl: "/Creative-head.jpg",
      firstName: "Vishal",
      lastName: "D.",
      positions: ["Creative Head"],
      description: "Crafting visuals that captivate and convert.",
      socialNetworks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/vishal-dabhade-0208a9314/" },
        { name: "X", url: "https://x.com/veeshaldabhade?t=zS3QTtsSQOgn0Dlg_GTaug&s=09" },
      ],
    },
    {
      imageUrl: "/Motion_Designer.jpg",
      firstName: "Akash",
      lastName: "S.",
      positions: ["Motion Designer"],
      description: "Bringing motion to life with stunning animations.",
      socialNetworks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/akash-s-motion/" },
        { name: "X", url: "https://x.com/akashsmotion" },
      ],
    },
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />;
      case "Github":
        return <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />;
      case "X":
        return <XIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />;
      default:
        return null;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.3,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.4 },
    },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.3,
      rotate: 360,
      color: "hsl(var(--primary))",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 1, filter: "brightness(100%)" },
    hover: {
      scale: 1.1,
      filter: "brightness(120%)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm text-primary/80 mb-2 uppercase tracking-widest">
          Our Team
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--chart-2))]">
          Visionaries Behind the Venture
        </h2>
      </div>

      <div className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent>
            {teamList.map((member, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-2"
              >
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="bg-muted/50 dark:bg-card h-full flex flex-col justify-between">
                    <CardHeader className="p-0 relative overflow-hidden">
                      <motion.div
                        className="aspect-square overflow-hidden relative"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <Image
                          src={member.imageUrl}
                          alt={`${member.firstName} ${member.lastName}`}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <CardTitle className="py-2 px-4 text-lg font-semibold">
                        {member.firstName} <span className="text-[hsl(var(--primary))]">{member.lastName}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 py-2 text-sm text-muted-foreground">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="cursor-pointer hover:text-[hsl(var(--primary))]">
                            {member.positions.join(" / ")}
                          </TooltipTrigger>
                          <TooltipContent className="bg-card text-foreground p-2">
                            <p className="text-xs">{member.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </CardContent>
                    <CardFooter className="px-4 py-2 space-x-4">
                      {member.socialNetworks.map((network, netIndex) => (
                        <motion.div
                          key={netIndex}
                          variants={iconVariants}
                          initial="initial"
                          whileHover="hover"
                          className="group"
                        >
                          <Link
                            href={network.url}
                            target="_blank"
                            className="text-gray-500 hover:text-[hsl(var(--primary))]"
                          >
                            {socialIcon(network.name)}
                          </Link>
                        </motion.div>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <CarouselPrevious className="pointer-events-auto bg-transparent border-none text-foreground hover:bg-black/20 hover:text-white transition-colors -ml-4 sm:-ml-6 md:-ml-8" />
            <CarouselNext className="pointer-events-auto bg-transparent border-none text-foreground hover:bg-black/20 hover:text-white transition-colors -mr-4 sm:-mr-6 md:-mr-8" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};