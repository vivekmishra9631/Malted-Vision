"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CampusAmbassadorForm } from "@/components/campus-ambassador-form";

export function CampusAmbassadorDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full sm:w-1/3 font-bold hover:bg-[#D247BF] hover:text-white transition-colors duration-300 border-2 border-[#D247BF]/50 text-foreground"
        >
          ✨ Be a Campus Influencer ✨
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <CampusAmbassadorForm />
      </DialogContent>
    </Dialog>
  );
} 