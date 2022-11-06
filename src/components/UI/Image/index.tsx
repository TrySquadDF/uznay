import { FC, useEffect } from "react";

type ImageProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  "src"
> & { src?: string | null };

export const Image: FC<ImageProps> = ({ src, style, draggable, ...args }) => {
  // useEffect(() => {
  //   const img = new window.Image();
  //   img.src = src ? src : "/img.svg";
  // }, [src]);

  return (
    <img
      draggable={draggable ? draggable : false}
      src={src ? src : "/img.svg"}
      style={
        style
          ? style
          : {
              width: "100%",
            }
      }
      {...args}
    ></img>
  );
};
