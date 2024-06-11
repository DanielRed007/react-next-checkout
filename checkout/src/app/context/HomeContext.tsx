"use client";

import React, { FC, createContext, useContext, useMemo, useState } from "react";
import { videoGames } from "../mock/data";
import { VideoGame } from "../model/Videogame";

export const HomeContext = createContext<HomeContextData | undefined>(
  undefined
);

interface HomeContextData {
  dataTable: VideoGame[];
  isCartOpen: boolean;
  isOpenedCartDialog: boolean;
  hideCartDialog(): void;
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
  const homeDataTable: VideoGame[] = useMemo(() => videoGames, [videoGames]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenCartDialog, setIsOpenCartDialog] = useState<boolean>(false);
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
      console.log("This item is already in the cart");
      setIsOpenCartDialog(true);
    }
  };

  const hideCartModal = () => {
    setIsOpenCartDialog(false);
  };

  const value = {
    dataTable: homeDataTable,
    isCartOpen: isOpen,
    isOpenedCartDialog: isOpenCartDialog,
    toggleCart: toggleCart,
    closeCart: closeCart,
    addItem: addItemToCart,
    gamesCart: cart,
    hideCartDialog: hideCartModal,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
