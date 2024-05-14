"use client";

import { useHomeContext } from "./context/HomeContext";
import { VideoGame } from "./model/Videogame";
import CheckoutMainTable from "./shared/CheckoutMainTable";

export default function Home() {
  const { dataTable } = useHomeContext();

  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <h1 className="text-3xl font-bold text-center text-white">
            Retro Store
          </h1>
        </header>
        <div className="py-6">
          <CheckoutMainTable data={dataTable} />
          <p className="text-lg text-center text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <footer className="py-6 text-center text-gray-600 text-sm">
          &copy; 2024 Thelema Store. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
