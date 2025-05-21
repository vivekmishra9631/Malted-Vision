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
import Image from "next/image";
import Image1 from "../../../public/Artboard 1.png";
import Image2 from "../../../public/Artboard 2.png";
import Image3 from "../../../public/Artboard 3.png";
import Image4 from "../../../public/Artboard 4.png";

interface ReviewProps {
  image: string;
  name: string;
  review: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: Image1,
    name: "John Doe",
    review: "Malted Vision transformed our brand's social media presence with stunning visuals and strategic campaigns!",
    rating: 5,
  },
  {
    image: Image2,
    name: "Sophia Collins",
    review: "Their influencer marketing approach delivered incredible engagement. Highly recommend!",
    rating: 4,
  },
  {
    image: Image3,
    name: "Adam Johnson",
    review: "Professional, creative, and results-driven. Our campaign exceeded all expectations.",
    rating: 5,
  },
  {
    image: Image4,
    name: "Ethan Parker",
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
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
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
                    width={300} // Set to 300px
                    height={300} // Set to 300px for square shape
                    className="object-cover" // Maintain square shape
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
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
};