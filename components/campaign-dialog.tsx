"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CampaignForm } from "@/components/campaign-form";

export function CampaignDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full xs:w-3/4 sm:w-1/2 md:w-1/3 font-bold hover:bg-primary hover:text-white transition-colors duration-300 border-2 border-primary/50 text-foreground text-xs xs:text-sm sm:text-base md:text-lg py-2 xs:py-3 sm:py-4"
        >
          Start with Malted
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] xs:w-[90%] sm:w-[85%] md:max-w-[425px] lg:max-w-[500px] max-h-[90vh] overflow-y-auto p-4 xs:p-5 sm:p-6">
        <CampaignForm />
      </DialogContent>
    </Dialog>
  );
}