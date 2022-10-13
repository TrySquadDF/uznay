import { CssProperty } from "@/types/componentsTypes";
import { PropsWithChildren } from "react";

export type GridContainerProps<T = {}> = {} & CssProperty &
  PropsWithChildren &
  T;

export type ContentContainerProps<T = {}> = {
  xs?: number;
  md?: number;
} & PropsWithChildren &
  CssProperty &
  T;
