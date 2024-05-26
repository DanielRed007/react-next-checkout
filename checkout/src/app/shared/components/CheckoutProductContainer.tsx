import React, { FC } from "react";
import { VideoGame } from "../../model/Videogame";
import { CardItem } from "./CardItem";

interface Props {
  data: VideoGame[];
}

const CheckoutProductContainer: FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-7">
      <div className="flex flex-wrap justify-center">
        {data.map((card, index) => (
          <CardItem key={index + card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutProductContainer;
