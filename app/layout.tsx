import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar Import
import Footer from "@/components/Footer"; // Footer Import

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "IRON CLAD | Next Gen Gym",
  description: "Premium Fitness Center",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Icons Load karna zaroori hai */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} bg-dark text-white antialiased`}>
        
        {/* Navbar sabse upar */}
        <Navbar />
        
        {/* Page Content (Home, About, etc.) */}
        {children}
        
        {/* Footer sabse niche */}
        <Footer />
        
      </body>
    </html>
  );
}