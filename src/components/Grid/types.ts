import type * as Stitches from "@stitches/react";

interface CssProperty {
  css?: Stitches.CSS;
}

export type GridContainerProps<T = {}> = {} & CssProperty & T;

export type ContentContainerProps = {
  xs?: number;
  md?: number;
};
