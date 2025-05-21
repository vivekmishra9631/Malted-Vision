"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/newsletter-form"; // Adjust the import path as needed
import { DialogClose } from "@/components/ui/dialog";

export function NewsletterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-1/3 font-bold hover:bg-primary hover:text-white transition-colors duration-300 border-2 border-primary/50 text-foreground"
        >
          Join Our Newsletter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <NewsletterForm />
      </DialogContent>
    </Dialog>
  );
}