import { memo } from "react";
import { observer } from "mobx-react-lite";

import { Grid } from "../Grid";

import useStore from "@/hooks/useStore";
import { Card } from "./components/Card/Card";
import NewsList from "../List/NewsList/NewsList";
import { ClMainBlock } from "../Grid/Catalog";

const MainInnerBlock = () => {
  const { APIV } = useStore();

  return (
    <Grid>
      <Grid.Content>
        <Grid
          css={{
            margin: "40px 54px",
          }}
        >
          {APIV.result && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }} // Макт
            >
              <ClMainBlock
                css={{
                  width: "90%",
                }}
              >
                <Card
                  title={APIV.result ? APIV.result.articles[0].title : "title"}
                  img={APIV.result.articles[0].urlToImage}
                  to={APIV.result.articles[0].url}
                ></Card>
                <NewsList />
              </ClMainBlock>
            </div>
          )}
        </Grid>
      </Grid.Content>
    </Grid> // two grid containermaquette big card
  );
};

{
  /* <Grid.Content
              display={"flex"}
              css={{
                maxWidth: "1280px",
              }}
            >
              <Grid.Content
                css={{
                  maxWidth: "720px",
                }}
              >
                <Card
                  title={APIV.result ? APIV.result.articles[0].title : "title"}
                  img={APIV.result.articles[0].urlToImage}
                  to={APIV.result.articles[0].url}
                ></Card>
              </Grid.Content>
              <Grid.Content>
                <NewsList></NewsList>
              </Grid.Content>
            </Grid.Content> */
}

export default memo(observer(MainInnerBlock));
