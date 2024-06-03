import { VideoGame } from "@/app/model/Videogame";
import React, { FC } from "react";

interface Props {
  card: VideoGame;
}

export const CardItem: FC<Props> = ({ card }) => {
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
          <div>
            <p className="text-sm font-bold mt-2 text-gray-400">
              {card.status}
            </p>
          </div>
        </div>
        <button className="mt-5 bg-blue-500 text-white py-2 px-4 mt-4 rounded">
          Buy Now
        </button>
      </div>
    </>
  );
};
