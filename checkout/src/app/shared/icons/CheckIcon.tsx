import React, { FC } from "react";

interface Props {
  onClick?(): void;
}

export const CheckIcon: FC<Props> = ({ onClick }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" onClick={onClick}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
