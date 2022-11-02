import { CardMin } from "@/components/Card";
import { Box } from "@/components/UI/Box";
import { ButtonBase } from "@/components/UI/ButtonBase/ButtonBase";
import { Heading } from "@/components/UI/Heading";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useStore from "@/hooks/useStore";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
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
  }, []);

  // useEffect(() => {
  //   console.log(store); // dev
  // }, [store]);

  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "2rem",
        padding: "2rem",
      }}
    >
      <Heading
        css={{
          maxWidth: "fit-content",
          paddingBottom: "2rem",
        }}
        size="h2"
      >{`По запросу: "${params}" найденно ${store.result?.totalResults} статей`}</Heading>
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
    </Box>
  );
}

export default observer(Search);
