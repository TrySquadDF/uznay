import type * as Stitches from "@stitches/react";
import { PropsWithChildren } from "react";

export interface CssProperty {
  css?: Stitches.CSS;
}

export type PropsReactCSSVariant<T extends { [key: symbol | string]: any }> =
  {} & Stitches.VariantProps<T> & PropsWithChildren & CssProperty;
