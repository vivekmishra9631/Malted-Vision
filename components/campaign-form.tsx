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
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Full name can only contain letters and spaces"),
  brandName: z
    .string()
    .min(2, "Brand name must be at least 2 characters")
    .max(50, "Brand name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  campaignBudget: z
    .string()
    .min(1, "Please select a budget range")
    .refine((val) => ["100-1k", "1k-5k", "5k-10k", "10k-25k", "25k+"].includes(val), {
      message: "Please select a valid budget range",
    }),
  cityCountry: z
    .string()
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
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("📤 Submitting campaign form with values:", values);
    console.log("🌐 Current window location:", window.location.href);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const endpoint = "/api/campaign";
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
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      console.log("✅ Campaign submission successful at", new Date().toISOString());
      console.log("🔔 Triggering success toast...");

      toast.success("Response saved successfully", {
        description: "Your campaign has been submitted to Malted Vision.",
        duration: 3000,
        style: {
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "8px",
          backgroundColor: "#22c55e",
          color: "#fff",
          zIndex: 9999, // Ensure toast appears above dialog
        },
      });

      console.log("🔄 Form state before reset:", form.formState);
      form.reset();
      console.log("🔄 Form state after reset:", form.formState);

      // Delay redirect to allow toast to display
      console.log("⏳ Delaying redirect for 3 seconds to show toast...");
      setTimeout(() => {
        console.log("➡️ Redirecting to homepage...");
        router.push("/");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to submit campaign. Please try again.";
      console.error("❌ Campaign submission failed:", errorMessage);

      toast.error("Submission Failed", {
        description: errorMessage,
        duration: 3000,
        style: {
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "8px",
          backgroundColor: "#ef4444",
          color: "#fff",
          zIndex: 9999,
        },
      });
    } finally {
      // Reset form in finally block (already handled above, but keeping for consistency)
      console.log("🔄 Form state reset after submission");
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
    <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg mx-auto p-3 xs:p-4 sm:p-6 bg-background rounded-lg shadow-lg">
      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4 text-center">
        Start Your Campaign
      </h2>
      <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-3 xs:mb-4 sm:mb-6">
        Ready to make noise where the youth lives? We curate influencer drops, campus takeovers, and UGC moments that drive real engagement.
      </p>

      <Form {...form}>
        <form onSubmit={handleFormSubmit} className="space-y-2 xs:space-y-3 sm:space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs xs:text-sm sm:text-base">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} className="text-xs xs:text-sm sm:text-base" />
                </FormControl>
                <FormMessage className="text-xs xs:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brandName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs xs:text-sm sm:text-base">Brand Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your brand name" {...field} className="text-xs xs:text-sm sm:text-base" />
                </FormControl>
                <FormMessage className="text-xs xs:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs xs:text-sm sm:text-base">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} className="text-xs xs:text-sm sm:text-base" />
                </FormControl>
                <FormMessage className="text-xs xs:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="campaignBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs xs:text-sm sm:text-base">Campaign Budget</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-xs xs:text-sm sm:text-base">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="100-1k" className="text-xs xs:text-sm sm:text-base">$100 - $1,000</SelectItem>
                    <SelectItem value="1k-5k" className="text-xs xs:text-sm sm:text-base">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5k-10k" className="text-xs xs:text-sm sm:text-base">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k" className="text-xs xs:text-sm sm:text-base">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k+" className="text-xs xs:text-sm sm:text-base">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs xs:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cityCountry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs xs:text-sm sm:text-base">City / Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city and country" {...field} className="text-xs xs:text-sm sm:text-base" />
                </FormControl>
                <FormMessage className="text-xs xs:text-sm" />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row justify-end gap-2 xs:gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                disabled={form.formState.isSubmitting}
                className="w-full sm:w-auto text-xs xs:text-sm sm:text-base"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="w-full sm:w-auto text-xs xs:text-sm sm:text-base"
              disabled={form.formState.isSubmitting || !form.formState.isValid}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Launch with Malted"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}