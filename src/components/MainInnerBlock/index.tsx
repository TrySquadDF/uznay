import { memo } from "react";
import { observer } from "mobx-react-lite";

import OtherList from "../List/components/OtherList/OtherList";
import { Grid } from "../Grid";
import { Card } from "./components/Card/Card";
import { ClMainBlock } from "../Grid/Catalog";

import useStore from "@/hooks/useStore";
import { To } from "../UI/To";

const MainInnerBlock = () => {
  const { APIV } = useStore();

  return (
    <Grid>
      <Grid.Content>
        <Grid>
          {APIV.result && (
            <Grid.Content
              css={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }} // Макет
            >
              <ClMainBlock>
                <OtherList />
              </ClMainBlock>
            </Grid.Content>
          )}
        </Grid>
      </Grid.Content>
    </Grid> // two grid containermaquette big card
  );
};

{
  /* <Card
                  title={APIV.result ? APIV.result.articles[0].title : "title"}
                  img={APIV.result.articles[0].urlToImage}
                  to={APIV.result.articles[0].url}
                />

                <div
                  style={{
                    marginLeft: "1rem",
                  }}
                >
                  <OtherList />
                </div> */
}

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
