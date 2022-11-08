import { Grid } from "@/components/Grid";
import { MainGrid } from "@/components/Grid/Catalog";

import NewsList from "@/components/List/components/NewsList/NewsList";
import MainInnerBlock from "@/components/MainInnerBlock";
import { Box } from "@/components/UI/Box";

function App() {
  return (
    <MainGrid css={{ minHeight: "1000px" }}>
      <Grid.Content
        css={{
          borderRight: "1px solid var(--gray-color)",
          "@mobile": {
            gridRowStart: "-1",
          },
        }}
      >
        <NewsList />
      </Grid.Content>
      <Grid.Content>
        <MainInnerBlock />
      </Grid.Content>
    </MainGrid>
  );
}

export default App;
