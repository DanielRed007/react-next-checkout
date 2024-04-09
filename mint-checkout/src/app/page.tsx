import styles from "./page.module.css";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={`${styles.item}`}>
          Big Column (7/10)
          <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
          </Flex>
        </div>
        <div className={`${styles.item}`}>Small Column (3/10)</div>
      </div>
    </div>
  );
}
