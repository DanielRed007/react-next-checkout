import { Box, Text, Container } from "@radix-ui/themes";
import { TextInput } from "../../shared/TextInput";
import styles from "../../page.module.css";

export const PersonalDataForm = () => {
  return (
    <Box
      // className={styles.personalDataFormContainer}
      as="div"
      width="auto"
      height="auto"
    >
      <TextInput placeholder="Hello Radix" />

      <Text size="7">Personal Information</Text>
    </Box>
  );
};
