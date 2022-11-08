import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Box } from "@/components/UI/Box";
import { ButtonBase } from "@/components/UI/ButtonBase/ButtonBase";
import { Heading } from "@/components/UI/Heading";
import { Paragraph, Text } from "@/UI/Text";
import { CardMin } from "@/components/Card";
import { Image } from "@/components/UI/Image";

import useStore from "@/hooks/useStore";

function Search() {
  let [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const {
    search: { setSearch, store, params, editLimit },
  } = useStore();

  useEffect(() => {
    if (typeof searchParams.get("q") === "string") {
      setSearch(searchParams.get("q") as string);
    } else {
      navigate("/");
    }
  }, [, searchParams]);

  if (store.error) {
    throw new Error(store.error.message);
  }

  if (store.result?.articles.length === 0) {
    return (
      <Box
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 5rem)",
        }}
      >
        <Box css={{ maxWidth: "450px", padding: "2rem" }}>
          <Image src={"/what.svg"} />
          <Paragraph
            css={{
              fontWeight: "600",
              textAlign: "center",
              color: "var(--gray-color)",
            }}
          >
            Наша коммада работает над наполнением! В следующий раз, мы сможем
            покозать больше по вашему запросу! Больше ты можешь найти
            <Text
              css={{
                color: "var(--primary-color)",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              {"  здесь."}
            </Text>
          </Paragraph>
        </Box>
      </Box>
    );
  }

  return (
    <Box.Load
      isLoad={Boolean(store.result)}
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "2rem",
        padding: "2rem",
      }}
    >
      <Box.Load isLoad={Boolean(store.result?.totalResults)}>
        <Heading
          css={{
            maxWidth: "fit-content",
            paddingBottom: "2rem",
          }}
          size="h2"
        >{`По запросу: "${params}" найденно ${store.result?.totalResults} статей`}</Heading>
      </Box.Load>
      <Box
        css={{
          maxWidth: "fit-content",
        }}
      >
        {store.result?.articles.map(
          ({ title, description, url, publishedAt }) => {
            return (
              <CardMin
                title={title}
                disc={description}
                url={url}
                date={publishedAt}
                key={url + "min"}
              ></CardMin>
            );
          }
        )}
      </Box>
      <ButtonBase
        css={{
          width: "100%",
          background: "var(--primary-color)",
          padding: "0.25rem",
          fontWeight: "bold",
          fontSize: "22pt",
          maxWidth: "1200px",
          color: "White",
          margin: "1rem 0",
        }}
        onClick={() => {
          editLimit(5);
        }}
      >
        +
      </ButtonBase>
    </Box.Load>
  );
}

export default observer(Search);
