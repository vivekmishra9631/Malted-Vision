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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
      imageUrl: "/Creative_Head.jpg",
      firstName: "Vishal",
      lastName: "A.",
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
      className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-14 md:py-18 lg:py-24 min-h-[70vh] flex flex-col justify-center items-center"
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-primary/80 mb-2 sm:mb-3 md:mb-4 uppercase tracking-widest">
          Our Team
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--chart-2))] neon">
          Visionaries Behind the Venture
        </h2>
      </div>

      <div className="w-full max-w-7xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            // slidesToShow: 1,
            // breakpoints: {
            //   "(min-height: 640px)": { slidesToShow: 2, slidesToScroll: 1 },
            //   "(min-width: 758px)": { slidesToShow: 2, slidesToScroll: 2 },
            //   "(min-width: 1024px)": { slidesToShow: 3, slidesToScroll: 3 },
            // },
          }}
          className="relative"
        >
          <CarouselContent className="pl-2 md:pl-4 lg:pl-6 xl:pl-10">
            {teamList.map((member, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 p-1 sm:p-2 md:p-3">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover="hover"
                  className="h-full"
                >
                  <Card className="bg-[hsl(var(--card)/0.95)] dark:bg-[hsl(var(--card))] flex flex-col h-full overflow-hidden max-w-sm transition-all duration-300 card-hover border-2 border-transparent hover:border-[hsl(var(--primary)/0.5)]">
                    <CardHeader className="p-0 relative overflow-hidden">
                      <motion.div
                        className="h-64 sm:h-72 md:h-80 overflow-hidden relative"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-shadow-lg neon">
                            {member.firstName}
                          </span>
                        </div>
                      </motion.div>
                      <CardTitle className="py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 text-sm sm:text-base md:text-lg lg:text-xl text-foreground">
                        {member.firstName}{" "}
                        <span className="text-[hsl(var(--primary))] ml-1 sm:ml-2">{member.lastName}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base text-muted-foreground">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="cursor-pointer hover:text-[hsl(var(--primary))]">
                            {member.positions.join(" / ")}
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[90%] sm:max-w-md p-2 sm:p-3 bg-[hsl(var(--card))] text-foreground shadow-md">
                            <p className="text-xs sm:text-sm">{member.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </CardContent>
                    <CardFooter className="p-3 sm:p-4 md:p-5 space-x-2 sm:space-x-3 md:space-x-4 mt-auto">
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
                            className="text-gray-500 dark:text-gray-400 hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--chart-2))] transition-colors duration-300"
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
            <CarouselPrevious className="pointer-events-auto bg-transparent border-none text-foreground hover:bg-[hsl(var(--primary)/0.2)] hover:text-white transition-all duration-300 -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-5" />
            <CarouselNext className="pointer-events-auto bg-transparent border-none text-foreground hover:bg-[hsl(var(--primary)/0.2)] hover:text-white transition-all duration-300 -mr-2 sm:-mr-3 md:-mr-4 lg:-mr-5" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};