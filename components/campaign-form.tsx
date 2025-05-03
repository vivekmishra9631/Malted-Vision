"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { DialogClose } from "@/components/ui/dialog";

const formSchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Full name can only contain letters and spaces"),
  brandName: z.string()
    .min(2, "Brand name must be at least 2 characters")
    .max(50, "Brand name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  campaignBudget: z.string()
    .min(1, "Please select a budget range")
    .refine((val) => ["100-1k", "1k-5k", "5k-10k", "10k-25k", "25k+"].includes(val), {
      message: "Please select a valid budget range",
    }),
  cityCountry: z.string()
    .min(2, "Please enter your city and country")
    .max(100, "Location must be less than 100 characters"),
});

export function CampaignForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      brandName: "",
      email: "",
      campaignBudget: "",
      cityCountry: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Only proceed if all validations pass
    if (form.formState.isValid) {
      console.log(values);
      // Here you would typically send the data to your backend
      router.push("/");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-background rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Start Your Campaign</h2>
      <p className="text-muted-foreground text-center mb-6">
        Ready to make noise where the youth lives? We curate influencer drops, campus takeovers, and UGC moments that drive real engagement.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brandName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your brand name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="campaignBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Budget</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="100-1k">$100 - $1,000</SelectItem>
                    <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k+">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cityCountry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City / Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city and country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose asChild>
            <Button 
              type="submit" 
              className="w-full"
              disabled={!form.formState.isValid}
            >
              Launch with Malted
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
} 