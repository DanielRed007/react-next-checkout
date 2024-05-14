import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HomeContextProvider } from "@/app/context/HomeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Checkout",
  description: "A prototype app, created with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HomeContextProvider>
        <body className={inter.className}>{children}</body>
      </HomeContextProvider>
    </html>
  );
}
