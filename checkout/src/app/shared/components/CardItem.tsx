import { useHomeContext } from "@/app/context/HomeContext";
import { VideoGame } from "@/app/model/Videogame";
import React, { FC } from "react";
import { AddCartIcon } from "../icons/AddCartIcon";
import { MinusIcon } from "../icons/MinusIcon";

interface Props {
  card: VideoGame;
}

export const CardItem: FC<Props> = ({ card }) => {
  const { addItem } = useHomeContext();

  const isItemAvailable = (status: string): boolean =>
    status === "out of stock";

  const getIconColor = (status: string): string | undefined => {
    return status === "available"
      ? "text-green-700"
      : status === "out of stock"
      ? "text-red-700"
      : status === "pre-order"
      ? "text-blue-700"
      : undefined;
  };

  return (
    <>
      <div className="border-2 border-blue-400 p-4 m-2 rounded-lg w-80 h-96 flex-col justify-between bg-white">
        <div className="h-16 flex items-center mt-3">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-900 to-blue-700">
            {card.name}
          </h2>
        </div>
        <div>
          <div className="my-2">
            <h2 className="text-sm font-light text-gray-700">
              {card.description}
            </h2>
          </div>
          <div className="my-1">
            <h3 className="text-md text-gray-700 font-semibold">
              {card.producer}
            </h3>
          </div>
          <div>
            <p className="text-md font-semibold mt-2 text-gray-500">
              {card.year}
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold mt-2 text-blue-500">
              {card.price}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-bold mt-2 text-gray-400 mr-1 mb-2">
              {card.status}
            </p>
            <MinusIcon colorClass={getIconColor(card.status)} />
          </div>
        </div>
        <button
          onClick={() => addItem(card)}
          className="mt-5 bg-blue-500 text-white py-2 px-4 mt-4 rounded flex items-left disabled:opacity-75"
          disabled={isItemAvailable(card.status)}
        >
          <h1 className="mr-3">Add to Cart</h1> <AddCartIcon />
        </button>
      </div>
    </>
  );
};
