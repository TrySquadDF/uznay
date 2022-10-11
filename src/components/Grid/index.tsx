import { ContentContainerProps, GridContainerProps } from "./types";
import { styled } from "../UI/stitches.config";
import type * as Stitches from "@stitches/react";

const Wrapper = styled("div", {
  display: "grid",
  variants: {
    column: {
      2: {
        gridTemplateColumns: "1fr 1fr",
      },
      3: {
        gridTemplateColumns: "1fr 1fr 1fr",
      },
      4: {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      },
    },
    row: {
      2: {
        gridTemplateRows: "1fr 1fr",
      },
      3: {
        gridTemplateRows: "1fr 1fr 1fr",
      },
      4: {
        gridTemplateRows: "1fr 1fr 1fr 1fr",
      },
    },
    flow: {
      column: {
        gridAutoFlow: "column",
      },
    },
    wrap: {
      auto: {
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      },
    },
    justify: {
      center: { justifyContent: "center" },
    },
    items: {
      center: {
        alignItems: "center",
      },
    },
  },
});

const ContentBlock = styled("div", {
  width: "100%",
  height: "100%",
  variants: {
    display: {
      flex: {
        display: "flex",
      },
    },
    items: {
      center: {
        alignItems: "center",
      },
    },
  },
});

export const Grid = ({
  children,
  ...args
}: GridContainerProps<Stitches.VariantProps<typeof Wrapper>>) => {
  return <Wrapper {...args}>{children}</Wrapper>;
};

Grid.Content = ({
  xs,
  md,
  ...args
}: ContentContainerProps<Stitches.VariantProps<typeof ContentBlock>>) => {
  return <ContentBlock {...args}></ContentBlock>;
};
