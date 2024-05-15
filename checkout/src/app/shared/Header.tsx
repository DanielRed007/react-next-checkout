import React from "react";
import { BeakerIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="hero-icon.png" alt="Hero Icon" className="w-10 h-10 mr-2" />
        <span className="text-xl font-semibold">My PoC App</span>
      </div>
      <nav>
        <a href="#" className="text-white hover:underline mx-2">
          Home
        </a>
        <a href="#" className="text-white hover:underline mx-2">
          About
        </a>
        <a href="#" className="text-white hover:underline mx-2">
          Contact
        </a>
      </nav>
      <div className="flex items-center">
        <img src="hero-icon.png" alt="Hero Icon" className="w-10 h-10 mr-2" />
        <span className="text-xl font-semibold">My PoC App</span>
      </div>
    </header>
  );
};

export default Header;
