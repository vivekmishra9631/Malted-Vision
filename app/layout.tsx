import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malted Vision",
  description: "Connecting Brands with Gen Z Through Authentic Voices",
  openGraph: {
    type: "website",
    url: "https://www.maltedvision.com/", // Replace with your actual deployed URL
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Malted Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.maltedvision.com/", // Replace with your actual deployed URL
    title: "Malted Vision",
    description: "Connecting Brands with Gen Z Through Authentic Voices",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico", // Favicon for browser tabs
    apple: "/apple-touch-icon.png", // Apple Touch Icon for iOS
    shortcut: "/favicon.ico", // Fallback for older browsers
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
          <FooterSection />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}