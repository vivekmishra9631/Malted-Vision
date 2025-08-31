"use client";

import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import Image from "next/image";
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

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm text-primary/80 mb-2 uppercase tracking-widest">
          Our Team
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold">
          Visionaries Behind the Venture
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-screen-lg mx-auto">
        {teamList.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
            className="flex flex-col items-center"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-muted/50 dark:bg-card rounded-full overflow-hidden">
              <Image
                src={member.imageUrl}
                alt={`${member.firstName} ${member.lastName}`}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image for ${member.firstName} ${member.lastName}: ${member.imageUrl}`);
                  e.currentTarget.src = "https://via.placeholder.com/192?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="mt-2 text-center">
              <p className="text-lg font-semibold">
                {member.firstName} {member.lastName}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};