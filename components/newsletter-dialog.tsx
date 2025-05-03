"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DialogClose } from "@/components/ui/dialog";

export function NewsletterDialog() {
  const router = useRouter();

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
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-center">Stay Updated</h2>
            <p className="text-muted-foreground text-center">
              Learn about new crafted stories and strategies that captivate a brand.
            </p>
          </div>
          
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full"
            />
            <DialogClose asChild>
              <Button 
                className="w-full"
                onClick={() => {
                  toast.success("You've been subscribed to our newsletter!");
                  router.push("/");
                }}
              >
                Subscribe
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 