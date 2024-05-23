import React from "react";
import { BeakerIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CustomLink } from "./CustomLink";
import { CustomRoute } from "@/app/model/CustomRoute";
import { CartIcon } from "../icons/CartIcon";
import { useHomeContext } from "@/app/context/HomeContext";
import { AtIcon } from "../icons/AtIcon";

const routes: CustomRoute[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  const { toggleCart } = useHomeContext();

  const toggleRetroCart = () => {
    toggleCart();
  };

  return (
    <header className="bg-blue-800 text-white py-2 px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-1 flex justify-between items-center">
        <div className="flex">
          <AtIcon />
        </div>

        <CustomLink routes={routes} />

        <div className="flex">
          <h1 className="text-md font-quicksand font-semibold mr-2">Cart</h1>
          <CartIcon onClick={toggleRetroCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
