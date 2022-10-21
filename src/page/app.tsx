import { observer } from "mobx-react-lite";
import { Grid } from "@/components/Grid";
import { MainGrid } from "@/components/Grid/Catalog";
import useStore from "src/hooks/useStore";
import NewsList from "@/components/List/NewsList/NewsList";
import MainInnerBlock from "@/components/MainInnerBlock";

function App() {
  const { API, APIV } = useStore(); // todo: del >> sddsds --- string and onChange event

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

// {
//   width: "100%",
//   height: "100%",
//   minHeight: "calc(100vh - 4.1rem)",
//   gridTemplateColumns: "300px",
// }
