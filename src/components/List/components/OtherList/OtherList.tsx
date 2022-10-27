import { observer } from "mobx-react-lite";
import { memo } from "react";

import { CardMin, CardBig } from "@/components/Card";
import { Heading } from "@/components/UI/Heading";
import { Box } from "@/components/UI/Box";
import { Hr } from "@/components/UI/Hr";

import useStore from "@/hooks/useStore";
import { Loader } from "@/components/UI/Loader";

//TO DO: Привести в порядок документ разбить на блоки и сдлеать отделный комнонент для отображения даты.
//TO DO: Описать типы Respons. Прикурить скелетоню

const OtherList = () => {
  const {
    APIV: { result },
  } = useStore();

  if (!result)
    return (
      <Box
        css={{
          size: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </Box>
    );

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
        src={result!.articles[0].urlToImage}
        title={result!.articles[0].title}
        disc={result!.articles[0].description}
        url={result!.articles[0].url}
        date={result!.articles[0].publishedAt}
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
          marginBottom: "1rem",
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
          {result.articles.map(
            ({ title, description, url, publishedAt }, i) => {
              if (i !== 0)
                return (
                  <CardMin
                    title={title}
                    disc={description}
                    url={url}
                    date={publishedAt}
                  />
                );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(observer(OtherList));
