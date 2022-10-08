import type * as Stitches from "@stitches/react";
import { styled } from "@stitches/react";
import { FunctionComponent } from "preact";
import { ContentContainerProps, GridContainerProps } from "./types";

const Wrapper = styled("div", {
  display: "grid",
  width: "100px",
  height: "100px",
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
  },
});

const ContentBlock = styled("div", {
  width: "100%",
  height: "100%",
  background: "blue",
});

export module Grid {
  export const Container: FunctionComponent<
    GridContainerProps<Stitches.VariantProps<typeof Wrapper>>
  > = ({ children, ...args }) => {
    return <Wrapper {...args}>{children}</Wrapper>;
  };

  export const Content: FunctionComponent<
    ContentContainerProps & { css?: Stitches.CSS }
  > = ({ xs, md, ...args }) => {
    return <ContentBlock {...args}></ContentBlock>;
  };

  Content.displayName = "content";
}
