import { Grid } from "@/components/Grid";
import { MainGrid } from "@/components/Grid/Catalog";

export function App() {
  return (
    <MainGrid>
      <Grid.Content
        css={{
          "@mobile": {
            gridRowStart: "-1",
          },
        }}
      ></Grid.Content>
      <Grid.Content></Grid.Content>
    </MainGrid>
  );
}

// {
//   width: "100%",
//   height: "100%",
//   minHeight: "calc(100vh - 4.1rem)",
//   gridTemplateColumns: "300px",
// }
