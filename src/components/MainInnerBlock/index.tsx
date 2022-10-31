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
            }}
          >
            <ClMainBlock>
              <OtherList />
            </ClMainBlock>
          </Grid.Content>
        </Grid>
      </Grid.Content>
    </Grid>
  );
};

export default memo(observer(MainInnerBlock));
