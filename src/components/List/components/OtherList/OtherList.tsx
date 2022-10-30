import { observer } from "mobx-react-lite";
import { memo } from "react";

import { CardMin, CardBig } from "@/components/Card";
import { Heading } from "@/components/UI/Heading";
import { Loader } from "@/components/UI/Loader";
import { Box } from "@/components/UI/Box";
import { Hr } from "@/components/UI/Hr";

import useStore from "@/hooks/useStore";

//TO DO: Привести в порядок документ разбить на блоки и сдлеать отделный комнонент для отображения даты.
//TO DO: Описать типы Respons. Прикурить скелетоню

const OtherList = () => {
  const { APIV, Recomendation } = useStore();

  if (APIV.error) {
    throw new Error(APIV.error.message);
  }

  if (APIV.loading || !APIV.result || Recomendation.loading)
    return (
      <Box
        css={{
          width: "100%",
          height: "calc(100vh - 6rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </Box>
    );

  if (APIV.result?.articles.length === 0) {
    throw new Error("Нет ничего, чтобы мы могли вам показать.");
  }

  return (
    <Box
      css={{
        padding: "0 0.5rem",
        display: "flex",
        "@tablet": {
          flexDirection: "column-reverse",
        },
        "@mobile": {
          flexDirection: "column-reverse",
        },
      }}
    >
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
          {APIV.result.articles.map(
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
      {Recomendation.result && (
        <>
          {" "}
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
              "@longDesktop": {
                minWidth: "600px",
              },
            }}
          >
            {Recomendation.result.articles.map((el, i) => {
              return (
                <CardBig
                  src={el.urlToImage}
                  title={el.title}
                  disc={el.description}
                  url={el.url}
                  date={el.publishedAt}
                />
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default memo(observer(OtherList));
