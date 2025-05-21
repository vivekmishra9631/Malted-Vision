"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Instagram, Linkedin, X, Mail } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          message: values.message,
        }),
      });

      const responseData = await response.json();
      console.log("Backend response:", responseData);

      if (!response.ok) {
        throw new Error(
          responseData.message || "Failed to send message."
        );
      }

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Contact API error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message === "This email has already submitted a contact form"
            ? "This email has already been used to send a message."
            : error.message
          : "Failed to send message. Please try again.";
      toast.error(errorMessage);
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get in Touch
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Link
                href="https://maltedvision.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                maltedvision.com
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <Link
                href="mailto:maltedvision@gmail.com?subject=Contact from Website"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Send us an email"
              >
                maltedvision@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Instagram className="h-5 w-5 text-muted-foreground" />
              <Link
                href="https://instagram.com/maltedvision"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                @maltedvision
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
              <Link
                href="https://www.linkedin.com/company/malted-vision/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Malted Vision
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <X className="h-5 w-5 text-muted-foreground" />
              <Link
                href="https://x.com/maltedvision"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                @maltedvision
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <Card className="bg-muted/60 dark:bg-card">
            <CardHeader className="text-primary text-2xl"></CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid w-full gap-4"
                >
                  <div className="flex flex-col md:!flex-row gap-8">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting || !form.formState.isValid}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};