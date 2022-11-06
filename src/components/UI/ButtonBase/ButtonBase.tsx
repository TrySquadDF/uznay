import { styled } from "../stitches.config";

export const ButtonBase = styled("button", {
  background: "none",
  border: "none",
  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    style: {
      primary: {
        background: "rgb(246, 249, 255)",
      },
    },
  },
});
