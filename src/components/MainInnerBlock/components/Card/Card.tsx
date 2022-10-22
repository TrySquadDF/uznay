import { Heading } from "@/components/UI/Heading";
import { Image } from "@/components/UI/Image";
import { To } from "@/components/UI/To";
import { FC } from "react";

type CardProps = {
  img: string | null;
  title: string;
  to: string;
};

export const Card: FC<CardProps> = ({ img, title, to }) => {
  return (
    <To href={to}>
      <Image src={img}></Image>
      <Heading
        css={{
          padding: "10px 0",
        }}
      >
        {title}
      </Heading>
    </To>
  );
};

{
  /* <img
src={APIV.result.articles[0].urlToImage}
style={{
  maxWidth: "100%",
}}
></img>
<Heading>{APIV.result.articles[0].title}</Heading> */
}
