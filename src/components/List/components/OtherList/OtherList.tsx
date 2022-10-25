import { observer } from "mobx-react-lite";
import { memo } from "react";

import { Heading } from "@/components/UI/Heading";
import { CardMin, CardBig } from "@/components/Card";
import { Box } from "@/components/UI/Box";

import useStore from "@/hooks/useStore";
import { Hr } from "@/components/UI/Hr";

//TO DO: Привести в порядок документ разбить на блоки и сдлеать отделный комнонент для отображения даты.

const OtherList = () => {
  const { APIV } = useStore();

  return (
    <Box
      css={{
        padding: "0 0.5rem",
        "@longDesktop": {
          display: "flex",
        },
        "@desktop": {
          display: "flex",
        },
      }}
    >
      <CardBig
        src={APIV.result!.articles[0].urlToImage}
        title={APIV.result!.articles[0].title}
        disc={APIV.result!.articles[0].description}
        url={APIV.result!.articles[0].url}
        date={APIV.result!.articles[0].publishedAt}
      />
      <Hr
        css={{
          "@mobile": {
            display: "none",
          },
          "@tablet": {
            display: "none",
          },
          margin: "0 2rem",
        }}
      />
      <Box
        css={{
          dispaly: "flex",
          "@mobile": {
            marginTop: "2rem",
          },
          "@tablet": {
            marginTop: "2rem",
          },
        }}
      >
        <Heading size="h2">Политика</Heading>
        <Box
          css={{
            paddingTop: "1rem",
          }}
        >
          {APIV.result?.articles.map((el, i) => {
            if (i !== 0)
              return (
                <CardMin
                  title={el.title}
                  disc={el.description}
                  url={el.url}
                  date={el.publishedAt}
                />
              );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(observer(OtherList));
