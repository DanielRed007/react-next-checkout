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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <HomeContextProvider>
        <body className={inter.className}>{children}</body>
      </HomeContextProvider>
    </html>
  );
}
