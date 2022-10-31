import { styled } from "../stitches.config";

export const ButtonBase = styled("button", {
  background: "none",
  border: "none",
  "&:hover": {
    cursor: "pointer",
  },
});
