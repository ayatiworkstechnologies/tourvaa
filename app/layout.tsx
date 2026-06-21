import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";
import { ToastProvider } from "@/components/ui/ToastProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tourvaa | Explore the World",
  description: "Book unforgettable tours and experiences across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <ToastProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <WhatsAppButton />
        </ToastProvider>
      </body>
    </html>
  );
}
