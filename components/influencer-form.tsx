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

const formSchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  collegeName: z.string()
    .min(2, "College name is required"),
  phoneNumber: z.string()
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
    mode: "onChange", // allows validation feedback before submission
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch("/api/influencer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      toast.success("Application submitted successfully!");
      form.reset();
      router.push("/");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Submission failed. Try again.";
      toast.error(msg);
    }
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
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4"
        >
          {["fullName", "email", "collegeName", "phoneNumber"].map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof z.infer<typeof formSchema>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">{field.name === "collegeName" ? "College Name" : field.name === "phoneNumber" ? "Phone Number" : field.name.replace(/([A-Z])/g, ' $1')}</FormLabel>
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
                        field.name === "collegeName" ? "college name" : field.name === "phoneNumber" ? "phone number" : field.name.replace(/([A-Z])/g, " $1").toLowerCase()
                      }`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
