import React, { FC } from "react";
import { VideoGame } from "../../model/Videogame";

interface Props {
  data: VideoGame[];
}

const CheckoutMainTable: FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-7">
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="m-4">
              <th className="px-4 font-quicksand bg-white border text-gray-500 py-2">
                Name
              </th>
              <th className="px-4 font-quicksand bg-white border text-gray-500 py-2">
                Description
              </th>
              <th className="px-4 font-quicksand bg-white border text-gray-500 py-2">
                ISBN
              </th>
              <th className="px-4 font-quicksand bg-white border text-gray-500 py-2">
                Price
              </th>
              <th className="px-4 font-quicksand bg-white border text-gray-500 py-2">
                Producer
              </th>
              <th className="px-4 font-quicksand bg-white border text-gray-500 py-2">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-500" : ""}>
                <td className="border font-quicksand px-4 py-2">{item.name}</td>
                <td className="border font-quicksand px-4 py-2">
                  {item.description}
                </td>
                <td className="border font-quicksand px-4 py-2">{item.isbn}</td>
                <td className="border font-quicksand px-4 py-2">
                  {item.price}
                </td>
                <td className="border font-quicksand px-4 py-2">
                  {item.producer}
                </td>
                <td className="border font-quicksand px-4 py-2">{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckoutMainTable;
