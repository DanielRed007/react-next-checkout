import { PersonalDataForm } from "./components/PersonalDataForm";
import styles from "./page.module.css";
import { Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={`${styles.item}`}>
          <div>
            <Text size="9">Your Order</Text>
          </div>

          <PersonalDataForm />
        </div>
        <div className={`${styles.item}`}>Small Column (3/10)</div>
      </div>
    </div>
  );
}
