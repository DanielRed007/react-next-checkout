import React, { FC } from "react";
import Link from "next/link";
import { CustomRoute } from "@/app/model/CustomRoute";

interface Props {
  routes: CustomRoute[];
}

export const CustomLink: FC<Props> = ({ routes }) => {
  return (
    <ul className="flex items-center">
      {routes.map((route, index) => (
        <li
          className="text-md font-quicksand font-semibold mr-2 px-2"
          key={index}
        >
          <Link key={index} href={route.link}>
            {route.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
