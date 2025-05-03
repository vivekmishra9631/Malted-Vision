"use client";
import { Separator } from "@/components/ui/separator";
// import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const FooterSection = () => {
  const { theme } = useTheme();
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="max-w-2xl mx-auto p-6 bg-card border border-secondary rounded-2xl">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex font-bold items-center">
            <Image 
              src={theme === "dark" ? "/mvwhite.png" : "/mvblack.png"}
              alt="Malted Vision Logo" 
              width={36} 
              height={36} 
              className="mr-2 rounded-lg border border-secondary"
              priority
            />
            <h3 className="text-2xl">Malted Vision</h3>
          </Link>
          
          <section>
            <h3 className="text-sm">
              Designed and Developed By{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/vivek-mishra-27622a1b7/"
                className="text-primary transition-all border-primary hover:border-b-2"
              >
                Vivek Mishra
              </Link>
            </h3>
          </section>
        </div>
      </div>
    </footer>
  );
};
