import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="container mx-auto py-12 xs:py-16 sm:py-24 md:py-32 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          About Malted Vision
        </h1>
        <p className="max-w-screen-md mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
          Connecting Brands with Gen Z Through Authentic Voices
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Malted Vision is a dynamic startup dedicated to bridging the gap between brands and Gen Z audiences. Founded with a passion for authentic engagement, we specialize in creator-led campaigns, trend-driven strategies, and deep Gen Z insights to help brands resonate with the next generation.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Our mission is to empower brands to connect with Gen Z in meaningful ways by leveraging culture, trends, and the power of authentic voices. We work closely with creators and ambassadors to craft campaigns that are not only engaging but also culturally relevant.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          At Malted Vision, we envision a future where brands and Gen Z collaborate seamlessly to create impactful, trend-setting campaigns that drive engagement and build lasting connections.
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
        <Button asChild variant="default" size="lg">
          <Link href="/pitch-deck.pdf" download>
            Download Pitch Deck
          </Link>
        </Button>
      </div>
    </section>
  );
};