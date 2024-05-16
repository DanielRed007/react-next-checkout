import React, { FC } from "react";
import Link from "next/link";
import { CustomRoute } from "../model/CustomRoute";

interface Props {
  routes: CustomRoute[];
}

export const CustomLink: FC<Props> = ({ routes }) => {
  return (
    <ul className="flex items-center">
      {routes.map((route, index) => (
        <li className="px-2">
          <Link key={index} href={route.link}>
            {route.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
