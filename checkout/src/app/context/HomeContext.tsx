"use client";

import React, { FC, createContext, useContext, useMemo, useState } from "react";
import { videoGames } from "../mock/data";
import { VideoGame } from "../model/Videogame";

const HomeContext = createContext<HomeContextData | undefined>(undefined);

interface HomeContextData {
  dataTable: VideoGame[];
  isCartOpen: boolean;
  toggleCart(open: boolean): void;
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

  function toggleCart(open: boolean) {
    console.log(!open);
    setIsOpen(!open);
  }

  const value = {
    dataTable: homeDataTable,
    isCartOpen: isOpen,
    toggleCart: toggleCart,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
