import { observer } from "mobx-react-lite";
import { memo } from "react";
import { List } from "../..";

import useStore from "src/hooks/useStore";

const NewsList = () => {
  const { API } = useStore();

  return (
    <List
      css={{
        "@mobile": {
          display: "none",
        },
      }}
    >
      {API.result?.articles.map((el) => {
        return (
          <List.Items key={el.publishedAt}>
            <List.To href={el.url}>
              <span>
                {new Date(el.publishedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              {el.title}
            </List.To>
          </List.Items>
        );
      })}
    </List>
  );
};

export default memo(observer(NewsList));
