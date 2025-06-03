import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "sonner";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Malted Vision",
  description: "Connecting Brands with Gen Z Through Authentic Voices",
  openGraph: {
    type: "website",
    url: "https://www.maltedvision.com/", // TODO: Replace with your actual deployed URL
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      {
        url: "/og-images/logo.png",
        width: 1200,
        height: 630,
        alt: "Malted Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.maltedvision.com/", // TODO: Replace with your actual deployed URL
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // TODO: Replace with your actual Twitter card image URL
    ],
  },
  icons: {
    icon: "/og-images/logo.png",
    apple: "/og-images/logo.png",
    shortcut: "/og-images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background flex flex-col", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          {/* Global Footer */}
          <footer className="text-center py-8 border-t border-gray-300">
            <p className="text-muted-foreground">
              © 2025 Malted Vision. All rights reserved.
            </p>
          </footer>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}