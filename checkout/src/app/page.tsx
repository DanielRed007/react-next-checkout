"use client";

import { useHomeContext } from "./context/HomeContext";
import { CartModal } from "./shared/components/CartModal";
import CheckoutMainTable from "./shared/components/CheckoutMainTable";
import { Footer } from "./shared/components/Footer";
import Header from "./shared/components/Header";

export default function Home() {
  const { dataTable } = useHomeContext();

  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="pt-6 pb-2">
          <h1 className="text-3xl font-quicksand font-bold text-center text-white">
            Retro Store
          </h1>
        </header>
        <div className="py-1">
          <CheckoutMainTable data={dataTable} />
          <p className="text-md font-quicksand text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <Footer content="2024 Thelema Store. All rights reserved." />
      </div>
      <CartModal />
    </div>
  );
}
