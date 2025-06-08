"use client";

import { useState, useEffect } from "react";
import { Loader } from "@/components/layout/loader";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "sonner";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <footer className="text-center py-8 border-t border-gray-300">
            <p className="text-muted-foreground">
              © 2025 Malted Vision. All rights reserved.
            </p>
          </footer>
          <Toaster richColors position="top-right" />
        </>
      )}
    </>
  );
};