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
      description: "As the Founder and CEO of Malted Vision, I help top-tier brands authentically connect with Gen Z through tailored marketing strategy. Malted Vision has a strong college network through 500+ campus ambassadors and reaching to more than 40000+ members.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/vivek-mishra-27622a1b7/",
        },
        {
          name: "X",
          url: "https://x.com/VivekMi77834875",
        },
      ],
    },
    {
      imageUrl: "/cto.jpg",
      firstName: "Shrikrushna",
      lastName: "P.",
      positions: ["CTO & Co-founder"],
      description: "Technical architect and innovation leader, Shrikrushna spearheads our technological advancements with expertise in cutting-edge solutions and a commitment to excellence in software development.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/shrikrushna-p-89a667334/",
        },
        {
          name: "X",
          url: "https://x.com/shrikrushna2004",
        },
      ],
    },
    {
      imageUrl: "/mediahead.jpg",
      firstName: "Nikhil",
      lastName: "R.",
      positions: ["Head of Media"],
      description: "Creative strategist and media expert, Nikhil leads our content and media initiatives with a keen eye for storytelling and a deep understanding of digital media landscapes.",
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/nikhil-ranganekar-a63b88221/",
        },
        {
          name: "X",
          url: "https://x.com/nikhilranganekar",
        },
      ],
    },
    // Removed Sarah Robinson's entry; can add a new team member here in the future
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

  return (
    <section
      id="team"
      className="container mx-auto py-12 xs:py-16 sm:py-24 md:py-32 min-h-[50vh] flex flex-col justify-center items-center"
    >
      <div className="text-center mb-4 xs:mb-6 sm:mb-8">
        <h2 className="text-sm xs:text-base sm:text-lg text-primary text-center mb-1 xs:mb-2 sm:mb-3 tracking-wider">
          Team
        </h2>

        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          Visionaries Behind the Venture
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 w-full max-w-6xl justify-items-center">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks, description },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg max-w-sm"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-4 xs:py-5 sm:py-6 pb-3 xs:pb-4 sm:pb-4 px-4 xs:px-5 sm:px-6 text-base xs:text-lg sm:text-xl">
                  {firstName}
                  <span className="text-primary ml-1 xs:ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground text-xs xs:text-sm sm:text-base ${
                    index === positions.length - 1 && "pb-4 xs:pb-5 sm:pb-6"
                  }`}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-pointer">
                        {position}
                        {index < positions.length - 1 && <span>,</span>}
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[90%] sm:max-w-xs p-2 sm:p-4">
                        <p className="text-xs xs:text-sm sm:text-base">{description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              ))}

              <CardFooter className="space-x-2 xs:space-x-3 sm:space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};