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
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("📤 Sending data to /api/newsletter:", values);

      const response = await fetch(`${API_URL}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("📥 Response received:", {
        status: response.status,
        statusText: response.statusText,
        data,
      });

      if (!response.ok) {
        console.error("❌ Request failed with status:", response.status, "and message:", data.message);
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      console.log("✅ Newsletter subscription successful at", new Date().toISOString());

      toast.success("Successfully subscribed", {
        description: "You're now subscribed to Malted Vision's newsletter!",
        duration: 3000,
        style: {
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "8px",
          backgroundColor: "#22c55e",
          color: "#fff",
        },
      });
      form.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to subscribe. Please try again.";
      console.error("❌ Newsletter subscription failed:", errorMessage);

      toast.error("Subscription Failed", {
        description: errorMessage,
        duration: 3000,
        style: {
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "8px",
          backgroundColor: "#ef4444",
          color: "#fff",
        },
      });
    } finally {
      // Reset form state to ensure isSubmitting is cleared
      form.resetForm();
      console.log("🔄 Form state reset after submission");
    }
  }

  // Debug form state
  console.log("🔔 Form state:", {
    isValid: form.formState.isValid,
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors,
  });

  return (
    <div className="w-full max-w-[90%] sm:max-w-md mx-auto p-4 sm:p-6 bg-background rounded-lg shadow-lg">
      <h2 id="newsletter-heading" className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground text-center mb-4 sm:mb-6">
        Stay updated with the latest news and updates from Malted Vision.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4"
          aria-labelledby="newsletter-heading"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="newsletter-email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      console.log("📧 Email input changed:", e.target.value);
                    }}
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
            {form.formState.isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </Form>
    </div>
  );
}