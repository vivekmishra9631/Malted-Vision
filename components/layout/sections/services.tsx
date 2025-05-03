import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Online Activation",
    // description: "Building authentic connections between brands and Gen Z through strategic activations",
    features: [
      "Social Media Campaigns",
      "Influencer Marketing",
      "UGC Campaigns",
      "Email Marketing",
      
    ]
  },
  {
    title: "On-ground Activation",
    // description: "Creating meaningful brand experiences in youth spaces",
    features: [
      "Campus Ambassador Programs",
      "College & Youth Festival Activations",
      "Pop-up Events / Brand Installations",
      "Ground-level Campaigns in Tier 1 & Tier 2 Cities"
    ]
  },
  {
    title: "Content Studio",
    // description: "Professional content creation for youth-focused campaigns",
    features: [
      "Data Driven Strategies",
      "Detailed Media Planning",
      "Ads Creation & Production",
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Services
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Building Unfiltered and Unforgettable Bridge Between Youths and Brands
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map(({ title, description, features }, index) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card hover:bg-muted/80 transition-colors group h-full flex flex-col"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D247BF]/20 to-primary/20 flex items-center justify-center group-hover:from-[#D247BF]/30 group-hover:to-primary/30 transition-colors">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent">0{index + 1}</span>
                </div>
                <div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription className="text-sm mt-1">{description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <Separator className="mb-4" />
            <CardContent className="flex-grow">
              <div className="grid gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D247BF] to-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
