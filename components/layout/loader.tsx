"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Loader = () => {
  // Animation variants for the logo
  const logoVariants = {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: [1, 1.05, 1], // Pulsing effect
      opacity: 1,
      transition: {
        opacity: { duration: 0.5 },
        scale: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the welcome message
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3, // Delay to appear after the logo
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center animate-gradient z-50 backdrop-blur-sm"
      style={{
        background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--primary) / 0.2) 50%, hsl(var(--background)) 100%)`,
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="relative"
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        exit="exit"
      >
        <Image
          src="/mvblack.png"
          alt="Malted Vision Logo"
          width={120}
          height={120}
          className="object-contain rounded-full"
          style={{ filter: "drop-shadow(0 0 15px hsl(var(--primary) / 0.3))" }}
          priority
        />
      </motion.div>
      <motion.h1
        className="mt-6 text-2xl sm:text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--chart-2))]"
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Welcome to Malted Vision
      </motion.h1>
    </motion.div>
  );
};