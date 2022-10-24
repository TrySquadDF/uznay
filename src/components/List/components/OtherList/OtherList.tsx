import { styled } from "@stitches/react";
import { observer } from "mobx-react-lite";
import { memo } from "react";
import { Image } from "@/components/UI/Image";
import { Text } from "@/UI/Text";

import useStore from "src/hooks/useStore";
import { To } from "@/components/UI/To";
import { Heading } from "@/components/UI/Heading";

// const Card_min = styled("div", {
//   paddingTop: "1.5rem",
//   maxWidth: "500px",
//   "&:not(:first-child)": {
//     borderTop: "1px solid rgba(0 , 0 , 0 , 0.1)",
//   },
// });

//TO DO: Привести в порядок документ разбить на блоки и сдлеать отделный комнонент для отображения даты.

const Box = styled("div", {
  "&:not(:first-child)": {
    paddingTop: "0px",
  },
});

const Card_Min = ({
  title,
  disc,
  date,
  url,
}: {
  title: string;
  disc: string | null;
  date: string;
  url: string;
}) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        padding: "1rem 0",
      }}
    >
      <Text
        css={{
          display: "flex",
          padding: "0.5rem 0",
          fontSize: "10pt",
          color: "rgba(0, 0,0 , 0.5)",
          fontWeight: "500",
        }}
      >
        {new Date(date).toLocaleTimeString("ru", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </Text>
      <Heading size="h3">{title}</Heading>
      <Text
        css={{
          padding: "1rem 0",
        }}
      >
        {disc}
      </Text>
      <To
        href={url}
        style="primary"
        css={{
          fontSize: "10pt",
        }}
      >
        Узнать подробнее
      </To>
    </Box>
  );
};

const Card_big = ({
  src,
  title,
  disc,
  date,
  url,
}: {
  src?: string | null;
  title: string;
  disc: string | null;
  date: string;
  url: string;
}) => {
  return (
    <Box
      css={{
        maxWidth: "600px",
      }}
    >
      <Image src={src} />
      <Text
        css={{
          display: "flex",
          padding: "0.5rem 0",
          fontSize: "10pt",
          color: "rgba(0, 0,0 , 0.5)",
          fontWeight: "500",
        }}
      >
        {new Date(date).toLocaleTimeString("ru", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </Text>
      <Heading size="h2">{title}</Heading>

      <Text
        css={{
          display: "flex",
          paddingTop: "0.75rem",
          fontSize: "11pt",
          color: "rgba(0, 0,0 , 0.75)",
        }}
      >
        {disc}
      </Text>
      <To href={url} style="primary">
        Узнать подробнее
      </To>
    </Box>
  );
};

const OtherList = () => {
  const { APIV } = useStore();
  // const [articles, setArticles] = useState<any>([[]]);

  // useEffect(() => {
  //   if (APIV.result) {
  //     const Hash: any[][] = [];
  //     const Array = toJS(APIV.result.articles);
  //     const lengthColumn = Math.floor(Array.length / 3);
  //     for (let i = 0; i < lengthColumn * 3; i += lengthColumn) {
  //       Hash.push(Array.slice(i, lengthColumn + i));
  //     }

  //     setArticles([...Hash]);
  //     console.log(articles, Hash); // todo:  line up: what is this ?
  //   }
  // }, [APIV]);

  return (
    <>
      <Card_big
        src={APIV.result!.articles[0].urlToImage}
        title={APIV.result!.articles[0].title}
        disc={APIV.result!.articles[0].description}
        url={APIV.result!.articles[0].url}
        date={APIV.result!.articles[0].publishedAt}
      />
      <hr />
      <div>
        {APIV.result?.articles.map((el, i) => {
          if (i !== 0)
            return (
              <Card_Min
                title={el.title}
                disc={el.description}
                url={el.url}
                date={el.publishedAt}
              />
            );
        })}
      </div>
    </>
  );
};
{
  /* {APIV.result?.articles.map((el, i) => {
        if (i === 0) {
          return <Card_big src={el.urlToImage} title={el.title} />;
        }

        return (
          <Card_min key={el.publishedAt}>
            <To href={el.url}>{el.title}</To>
          </Card_min>
        );
      })} */
}
export default memo(observer(OtherList));
