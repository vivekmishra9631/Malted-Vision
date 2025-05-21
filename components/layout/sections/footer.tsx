"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const FooterSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="max-w-2xl mx-auto p-6 bg-card border border-secondary rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <Link href="#" className="flex font-bold items-center">
            <Image 
              src={resolvedTheme === "dark" ? "/mvwhite.png" : "/mvblack.png"}
              alt="Malted Vision Logo" 
              width={36} 
              height={36} 
              className="mr-2 rounded-lg border border-secondary"
              priority
            />
            <h3 className="text-xl sm:text-2xl">Malted Vision</h3>
          </Link>
          
          <section className="text-center sm:text-right">
            <h3 className="text-xs sm:text-sm md:text-base">
              Designed and Developed By{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/vivek-mishra-27622a1b7/"
                className="text-primary transition-all border-primary hover:border-b-2"
              >
                Vivek
              </Link>{" "}
              &{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/shrikrushna-p-89a667334/"
                className="text-primary transition-all border-primary hover:border-b-2"
              >
                Shrikrushna
              </Link>
            </h3>
          </section>
        </div>
      </div>
    </footer>
  );
};