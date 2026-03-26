import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Christy Eddington | ePortfolio",
    template: "%s | Christy Eddington",
  },
  description:
    "Academic ePortfolio for Christy Eddington highlighting communication, digital literacy, innovative problem solving, operational leadership, and career goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream text-ink">
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-16 pt-8 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
