import { observer } from "mobx-react-lite";
import { Grid } from "@/components/Grid";
import { MainGrid } from "@/components/Grid/Catalog";
import { NewsList } from "@/components/NewsList";
import useStore from "src/hooks/useStore";
import { getDataFromServer } from "@/utils/serverRequest/serverRequest";
import { useEffect } from "react";

function App() {
  const { API, APIV } = useStore();

  console.log(API, APIV);

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
        <NewsList>
          {API.result?.articles.map((el) => {
            return (
              <NewsList.Items key={el.publishedAt + el.author}>
                <NewsList.To href={el.url}>
                  <span>
                    {new Date(el.publishedAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  {el.title}
                </NewsList.To>
              </NewsList.Items>
            );
          })}
        </NewsList>
      </Grid.Content>
      <Grid.Content></Grid.Content>
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
