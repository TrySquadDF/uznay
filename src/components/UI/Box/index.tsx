import { PropsReactCSSVariant } from "@/types/componentsTypes";
import React, { HTMLAttributes, ReactNode } from "react";
import { Loader as DefualtLoader } from "../Loader";
import { styled } from "../stitches.config";

type LoadProps = {
  isLoad: boolean;
  Loader?: ReactNode;
};

const BoxStyle = styled("div", {});

/**
 * Container to use css in js
 */
export const Box = ({
  children,
  ...args
}: PropsReactCSSVariant<typeof BoxStyle> & HTMLAttributes<HTMLDivElement>) => {
  return <BoxStyle {...args}>{children}</BoxStyle>;
};

/**
 * Контейнер для отображения контента, в зависимости от передаваемого пропса. В случае если пропс `isLoad` = false , то контейнер покажет загрузчик.
 * @param isLoad булевое значение контролирует отображение контента.
 * @param Loader опциональное значение. Отоброжаемый загрузчик.
 */
Box.Load = ({
  isLoad,
  Loader,
  children,
  ...args
}: PropsReactCSSVariant<typeof BoxStyle> &
  HTMLAttributes<HTMLDivElement> &
  LoadProps) => {
  if (!isLoad) {
    return <BoxStyle {...args}>{Loader ? Loader : <DefualtLoader />}</BoxStyle>;
  }

  return <BoxStyle {...args}>{children}</BoxStyle>;
};
