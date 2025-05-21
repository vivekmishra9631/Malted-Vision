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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DialogClose } from "@/components/ui/dialog";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  collegeName: z.string().min(2, "College name is required"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long"),
});

export function InfluencerForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      collegeName: "",
      phoneNumber: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("📤 Starting form submission with values:", values);
    console.log("🌐 Current window location:", window.location.href);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const res = await fetch("/api/influencer", {
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
      router.push("/");
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
        Become a Campus Influencer
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground text-center mb-4 sm:mb-6">
        Join our network of campus influencers and help brands connect with the youth.
      </p>

      <Form {...form}>
        <form
          onSubmit={handleFormSubmit}
          className="space-y-3 sm:space-y-4"
        >
          {["fullName", "email", "collegeName", "phoneNumber"].map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof z.infer<typeof formSchema>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {field.name === "collegeName"
                      ? "College Name"
                      : field.name === "phoneNumber"
                      ? "Phone Number"
                      : field.name.replace(/([A-Z])/g, " $1")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={
                        field.name === "email"
                          ? "email"
                          : field.name === "phoneNumber"
                          ? "tel"
                          : "text"
                      }
                      placeholder={`Enter your ${
                        field.name === "collegeName"
                          ? "college name"
                          : field.name === "phoneNumber"
                          ? "phone number"
                          : field.name.replace(/([A-Z])/g, " $1").toLowerCase()
                      }`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

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
              {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}