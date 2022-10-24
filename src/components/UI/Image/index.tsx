import { FC } from "react";

type ImageProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  "src"
> & { src?: string | null };

export const Image: FC<ImageProps> = ({ src }) => {
  return (
    <img
      draggable={false}
      src={src ? src : "/img.svg"}
      style={{
        width: "100%",
      }}
    ></img>
  );
};
