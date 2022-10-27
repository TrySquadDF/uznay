import { memo } from "react";
import { observer } from "mobx-react-lite";

import { Grid } from "../Grid";
import { ClMainBlock } from "../Grid/Catalog";

import OtherList from "../List/components/OtherList/OtherList";

// По мере разработки в случае необходимости можоно избавить от компонента CARD ./components/Card это тестовый экзепляр

const MainInnerBlock = () => {
  return (
    <Grid>
      <Grid.Content>
        <Grid>
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
