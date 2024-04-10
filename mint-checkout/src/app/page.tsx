import { PersonalDataForm } from "./components/PersonalDataForm/PersonalDataForm";
import styles from "./page.module.css";
import { Text, Box, Container, Grid } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box>
      <Container size="4">
        <Grid
          style={{
            background: "var(--gray-a2)",
          }}
          columns={{ md: "2" }}
          gap="3"
          width="100%"
        >
          <Box height="64px">
            <div
              style={{
                borderRadius: "var(--radius-3)",
                width: "100%",
                height: "100%",
                backgroundColor: "blue",
              }}
            ></div>
          </Box>
          <Box height="64px">
            <div
              style={{
                borderRadius: "var(--radius-3)",
                width: "100%",
                height: "100%",
                backgroundColor: "blue",
              }}
            ></div>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
