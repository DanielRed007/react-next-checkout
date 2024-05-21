import React from "react";
import { BeakerIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CustomLink } from "./CustomLink";
import { CustomRoute } from "@/app/model/CustomRoute";
import { CartIcon } from "../icons/CartIcon";
import { useHomeContext } from "@/app/context/HomeContext";

const routes: CustomRoute[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  const { isCartOpen, toggleCart } = useHomeContext();

  const toggleRetroCart = () => {
    toggleCart(!isCartOpen);
  };

  return (
    <header className="bg-blue-800 text-white py-2 px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-1 flex justify-between items-center">
        <div className="flex">
          <h1 className="text-md font-semibold mr-2">App</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </div>

        <CustomLink routes={routes} />

        <div className="flex">
          <h1 className="text-md font-semibold mr-2">Cart</h1>
          <CartIcon onClick={toggleRetroCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
