import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { AboutSection } from "@/components/layout/sections/about";

export const metadata = {
  title: "Malted Vision",
  description: "Connecting Brands with Gen Z Through Authentic Voices",
  openGraph: {
    type: "website",
    url: "https://www.maltedvision.com/",
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      {
        url: "/og-images/mvblack.png",
        width: 1200,
        height: 630,
        alt: "Malted Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.maltedvision.com/",
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <FooterSection />
    </>
  );
}