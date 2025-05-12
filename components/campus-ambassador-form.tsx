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
import { DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  college: z.string()
    .min(2, "College name must be at least 2 characters")
    .max(100, "College name must be less than 100 characters"),
  phoneNumber: z.string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number must be less than 15 characters"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});

export function CampusAmbassadorForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      college: "",
      phoneNumber: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("Application submitted successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-[90%] sm:max-w-md mx-auto p-4 sm:p-6 bg-background rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Join Our Campus Ambassador Program</h2>
      <p className="text-sm sm:text-base text-muted-foreground text-center mb-4 sm:mb-6">
        Become a part of our team and enjoy benefits like:
        <ul className="list-disc list-inside mt-2 text-left text-sm sm:text-base">
          <li>Internship Certificate</li>
          <li>Earning Opportunities</li>
          <li>Networking with Industry Professionals</li>
          <li>Skill Development</li>
        </ul>
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
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
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your college name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Enter your phone number" {...field} />
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

          <DialogClose asChild>
            <Button 
              type="submit" 
              className="w-full"
              disabled={!form.formState.isValid}
            >
              Apply Now
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
} 