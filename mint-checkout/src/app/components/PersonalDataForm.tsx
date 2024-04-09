import { Text } from "@radix-ui/themes";
import { TextInput } from "../shared/TextInput";

export const PersonalDataForm = () => {
  return (
    <div>
      <Text size="7">Personal Information</Text>

      <TextInput placeholder="Hello Radix" />
    </div>
  );
};
