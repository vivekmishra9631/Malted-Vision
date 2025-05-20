"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ReviewProps {
  image: string;
  name: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "/images/testimonial/Artboard1.png",
    name: "John Doe",
  },
  {
    image: "/images/testimonial/Artboard2.png",
    name: "Sophia Collins",
  },
  {
    image: "/images/testimonial/Artboard3.png",
    name: "Adam Johnson",
  },
  {
    image: "/images/testimonial/Artboard4.png",
    name: "Ethan Parker",
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary tracking-wider mb-2">Testimonials</h2>
        <h2 className="text-3xl md:text-4xl font-bold">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{ align: "start" }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card flex justify-center items-center py-12">
                <CardContent className="flex justify-center items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-xl w-full h-auto object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
