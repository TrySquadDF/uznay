import { styled } from "../stitches.config";

export const Heading = styled("span", {
  fontWeight: "bold",
  fontSize: "32px",
  lineHeight: "40px",
  variants: {
    size: {
      h2: {
        fontSize: "24px",
        lineHeight: "24px",
      },
      h3: {
        fontSize: "18px",
        lineHeight: "24px",
      },
    },
  },

  "@tablet": {
    fontSize: "24px",
    lineHeight: "30px",
  },

  "@mobile": {
    fontSize: "20px",
    lineHeight: "26px",
  },
});
