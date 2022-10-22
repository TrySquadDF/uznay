import { createStitches, styled } from "@stitches/react";
import { observer } from "mobx-react-lite";
import { memo, useEffect, useState } from "react";
import { List } from "../..";
import { Image } from "@/components/UI/Image";

import useStore from "src/hooks/useStore";
import { To } from "@/components/UI/To";
import { toJS } from "mobx";

// const styled = createStitches({
//   media: {
//     longDesktop: "(min-width: 1345px) and (max-width: 1440px)",
//     desktop: "(min-width: 1024px)",
//     tablet: "(min-width: 720px) and (max-width: 1024px)",
//     mobile: "(max-width: 720px)",
//   },
// });

const Card_min = styled("div", {
  paddingTop: "1.5rem",
  maxWidth: "250px",
  "&:not(:first-child)": {
    borderTop: "1px solid rgba(0 , 0 , 0 , 0.1)",
  },
});

const Card_big = ({ src, title }: { src?: string | null; title: string }) => {
  return (
    <div
      style={{
        maxWidth: "250px",
      }}
    >
      <Image src={src} />
      <span>{title}</span>
    </div>
  );
};

const OtherList = () => {
  const { APIV } = useStore();
  const [articles, setArticles] = useState<any>([[]]);

  useEffect(() => {
    if (APIV.result) {
      const Hash: any[][] = [];
      const Array = toJS(APIV.result.articles);
      const lengthColumn = Math.floor(Array.length / 3);
      for (let i = 0; i < lengthColumn * 3; i += lengthColumn) {
        Hash.push(Array.slice(i, lengthColumn + i));
      }

      setArticles([...Hash]);
      console.log(articles, Hash); // todo:  line up: what is this ?
    }
  }, [APIV]);

  return (
    <>
      {APIV.result?.articles.map((el, i) => {
        if (i === 0) {
          return <Card_big src={el.urlToImage} title={el.title} />;
        }

        return (
          <Card_min key={el.publishedAt}>
            <To href={el.url}>{el.title}</To>
          </Card_min>
        );
      })}
    </>
  );
};

export default memo(observer(OtherList));
