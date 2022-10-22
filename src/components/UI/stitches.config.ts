import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
    longDesktop: "(min-width: 1345px) and (max-width: 1440px)",
    desktop: "(min-width: 1024px)",
    tablet: "(min-width: 720px) and (max-width: 1024px)",
    mobile: "(max-width: 720px)",
  },
});
