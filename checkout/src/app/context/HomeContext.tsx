"use client";

import React, { FC, createContext, useContext, useMemo, useState } from "react";
import { videoGames } from "../mock/data";
import { VideoGame } from "../model/Videogame";

const HomeContext = createContext<HomeContextData | undefined>(undefined);

interface HomeContextData {
  dataTable: VideoGame[];
  isCartOpen: boolean;
  toggleCart(): void;
  closeCart(): void;
  addItem(game: VideoGame): void;
  gamesCart: VideoGame[] | [];
}

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface HomeContextProviderProps {
  children: any;
}

export const HomeContextProvider: FC<HomeContextProviderProps> = ({
  children,
}) => {
  const homeDataTable = useMemo(() => videoGames, [videoGames]);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCartItem] = useState<VideoGame[]>([]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const addItemToCart = (currentGame: VideoGame) => {
    const isGameAdded = cart.find((game) => game.id === currentGame.id);

    if (!isGameAdded) {
      setCartItem((prevCart: any) => [...prevCart, currentGame]);
    } else {
      console.log("Game is already in the cart");
    }
  };

  const value = {
    dataTable: homeDataTable,
    isCartOpen: isOpen,
    toggleCart: toggleCart,
    closeCart: closeCart,
    addItem: addItemToCart,
    gamesCart: cart,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
