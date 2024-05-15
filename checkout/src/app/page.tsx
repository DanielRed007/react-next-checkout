"use client";

import { useHomeContext } from "./context/HomeContext";
import CheckoutMainTable from "./shared/CheckoutMainTable";
import { Footer } from "./shared/Footer";
import Header from "./shared/Header";

export default function Home() {
  const { dataTable } = useHomeContext();

  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="pt-6 pb-2">
          <h1 className="text-3xl font-bold text-center text-white">
            Retro Store
          </h1>
        </header>
        <div className="py-1">
          <CheckoutMainTable data={dataTable} />
          <p className="text-md text-center text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <Footer content="2024 Thelema Store. All rights reserved." />
      </div>
    </div>
  );
}
