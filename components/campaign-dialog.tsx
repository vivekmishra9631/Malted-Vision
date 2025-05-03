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
          className="w-1/3 font-bold hover:bg-primary hover:text-white transition-colors duration-300 border-2 border-primary/50 text-foreground"
        >
          Start with Malted
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <CampaignForm />
      </DialogContent>
    </Dialog>
  );
} 