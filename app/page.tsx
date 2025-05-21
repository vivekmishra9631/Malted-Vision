import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

// Removed unused PrismaClient import and instantiation
// Prisma should be imported where needed (e.g., API routes) via lib/prisma.ts

export const metadata = {
  title: "Malted Vision",
  description: "Connecting Brands with Gen Z Through Authentic Voices",
  openGraph: {
    type: "website",
    url: "https://your-vercel-app.vercel.app", // Replace with your actual deployed URL
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      {
        url: "/og-images/mvblack.png", // Fixed path: removed ../public, use root-relative path
        width: 1200,
        height: 630,
        alt: "Malted Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://your-vercel-app.vercel.app", // Replace with your actual deployed URL
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // Ensure this URL is accessible
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}