import { CartProvider } from "@/context/cart-context";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Black Samurai | Mystery Sushi Boxes",
  description: "Luxury mystery sushi experience by Black Samurai.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${display.variable} bg-black text-white antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
