import { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
}

export const CustomAlert: FC<Props> = ({ title, subtitle }) => {
  return (
    <div
      className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};
