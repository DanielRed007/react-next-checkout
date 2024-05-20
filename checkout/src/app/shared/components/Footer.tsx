import React, { FC } from "react";

interface Props {
  content: string;
}

export const Footer: FC<Props> = ({ content }) => {
  return (
    <footer className="pt-2 text-center text-gray-600 text-sm">
      &copy; {content}
    </footer>
  );
};
