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
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  college: z
    .string()
    .min(2, "College name must be at least 2 characters")
    .max(100, "College name must be less than 100 characters"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number must be less than 15 characters"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
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
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("📤 Submitting Campus Ambassador form with values:", values);
    console.log("🌐 Current window location:", window.location.href);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      // Map `college` to `collegeName` to match the backend schema
      const payload = {
        fullName: values.fullName,
        collegeName: values.college,
        phoneNumber: values.phoneNumber,
        email: values.email,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
      const endpoint = `${apiUrl}/api/influencer`;
      console.log("🌍 Fetching endpoint:", endpoint);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      }).catch((err) => {
        console.error("❌ Fetch error:", err);
        throw new Error(err.message || "Network error occurred");
      });

      clearTimeout(timeoutId);

      console.log("📥 Fetch response status:", res.status);
      console.log("📥 Fetch response headers:", [...res.headers.entries()]);

      const data = await res.json().catch((err) => {
        console.error("❌ JSON parse error:", err);
        throw new Error("Failed to parse response");
      });
      console.log("📥 Response data:", data);

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Application submitted successfully!");
      form.reset();
    } catch (err) {
      console.error("❌ Error during form submission:", err);
      const msg =
        err instanceof Error
          ? err.message === "This email has already registered as a campus influencer"
            ? "This email is already registered."
            : err.message
          : "Submission failed. Please try again.";
      toast.error(msg);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("🖱️ Form submit event triggered");
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="w-full max-w-[90%] sm:max-w-md mx-auto p-4 sm:p-6 bg-background rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
        Join Our Campus Ambassador Program
      </h2>
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
        <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
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
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Apply Now"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}