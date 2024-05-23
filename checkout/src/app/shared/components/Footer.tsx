import React, { FC } from "react";

interface Props {
  content: string;
}

export const Footer: FC<Props> = ({ content }) => {
  return (
    <footer className="pt-2 font-quicksand text-center text-white text-sm">
      &copy; {content}
    </footer>
  );
};
