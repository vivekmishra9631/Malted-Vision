"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import Image1 from "../../../public/Artboard 1.png";
import Image2 from "../../../public/Artboard 2.png";
import Image3 from "../../../public/Artboard 3.png";
import Image4 from "../../../public/Artboard 4.png";

interface ReviewProps {
  image: StaticImageData;
  name: string;
  review: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: Image1,
    name: "Campa Energy",
    review: "Malted Vision transformed our brand's social media presence with stunning visuals and strategic campaigns!",
    rating: 5,
  },
  {
    image: Image2,
    name: "Krafton",
    review: "Their influencer marketing approach delivered incredible engagement. Highly recommend!",
    rating: 4,
  },
  {
    image: Image3,
    name: "Thums Up Charged",
    review: "Professional, creative, and results-driven. Our campaign exceeded all expectations.",
    rating: 5,
  },
  {
    image: Image4,
    name: "ICICI Bank",
    review: "The team’s expertise in content creation made our brand stand out. Amazing work!",
    rating: 4,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary tracking-wider mb-2">Testimonials</h2>
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Trusted Brand Partners
        </h2>
      </div>

      <div className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative"
        >
          <CarouselContent>
            {reviewList.map((review) => (
              <CarouselItem
                key={review.name}
                className="md:basis-1/2 lg:basis-1/3 p-2"
              >
                <Card className="bg-muted/50 dark:bg-card h-full flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {review.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={300}
                      height={300}
                      className="object-cover"
                      onError={(e) => {
                        console.error(`Failed to load image for ${review.name}: ${review.image}`);
                        e.currentTarget.src = "https://via.placeholder.com/300?text=Image+Not+Found";
                      }}
                      unoptimized
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <CarouselPrevious
              className="pointer-events-auto bg-transparent border-none text-foreground hover:bg-black/20 hover:text-white transition-colors -ml-2 xs:-ml-3 sm:-ml-4 md:-ml-5 lg:-ml-6 xl:-ml-8"
            />
            <CarouselNext
              className="pointer-events-auto bg-transparent border-none text-foreground hover:bg-black/20 hover:text-white transition-colors -mr-2 xs:-mr-3 sm:-mr-4 md:-mr-5 lg:-mr-6 xl:-mr-8"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};