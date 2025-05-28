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
import { DialogClose } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react"; // For loading spinner

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("📤 Sending data to /api/newsletter:", values);
    console.log("🌐 Current window location:", window.location.href);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const endpoint = "/api/newsletter";
      console.log("🌍 Fetching endpoint:", endpoint);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        signal: controller.signal,
      }).catch((err) => {
        console.error("❌ Fetch error:", err);
        throw new Error(err.message || "Network error occurred");
      });

      clearTimeout(timeoutId);

      console.log("📥 Fetch response status:", response.status);
      console.log("📥 Fetch response headers:", [...response.headers.entries()]);

      const data = await response.json().catch((err) => {
        console.error("❌ JSON parse error:", err);
        throw new Error("Failed to parse response");
      });
      console.log("📥 Response data:", data);

      if (!response.ok) {
        console.error("❌ Request failed with status:", response.status, "and message:", data.message);
        if (response.status === 409) {
          throw new Error("This email is already subscribed to our newsletter.");
        }
        if (response.status === 400 && data.errors) {
          throw new Error("Please enter a valid email address.");
        }
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      console.log("✅ Newsletter subscription successful at", new Date().toISOString());

      toast.success("Successfully Subscribed", {
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

      form.reset(); // Reset only on success
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
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("🖱️ Form submit event triggered");
    form.handleSubmit(onSubmit)();
  };

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
          onSubmit={handleFormSubmit}
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
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      console.log("📧 Email input changed:", e.target.value);
                    }}
                    aria-invalid={!!form.formState.errors.email}
                    aria-describedby={
                      form.formState.errors.email ? "newsletter-email-error" : undefined
                    }
                  />
                </FormControl>
                <FormMessage id="newsletter-email-error" />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                disabled={form.formState.isSubmitting}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={form.formState.isSubmitting || !form.formState.isValid}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}