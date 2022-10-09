import type * as Stitches from "@stitches/react";
import { ComponentChildren } from "preact";

export interface CssProperty {
  css?: Stitches.CSS;
}

export interface PropsWhithChildren {
  children?: ComponentChildren;
}

export type GridContainerProps<T = {}> = {} & CssProperty &
  PropsWhithChildren &
  T;

export type ContentContainerProps<T = {}> = {
  xs?: number;
  md?: number;
} & PropsWhithChildren &
  CssProperty &
  T;
