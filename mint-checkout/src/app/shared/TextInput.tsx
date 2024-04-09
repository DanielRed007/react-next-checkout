import { TextField } from "@radix-ui/themes";
import React, { FC } from "react";

interface Props {
  placeholder: string;
}

export const TextInput: FC<Props> = ({ placeholder }) => {
  return (
    <TextField.Root placeholder={placeholder}>
      <TextField.Slot></TextField.Slot>
    </TextField.Root>
  );
};
