import { observer } from "mobx-react-lite";
import { Grid } from "@/components/Grid";
import { MainGrid } from "@/components/Grid/Catalog";

import NewsList from "@/components/List/components/NewsList/NewsList";
import MainInnerBlock from "@/components/MainInnerBlock";

function App() {
  return (
    <MainGrid>
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

export default observer(App);
