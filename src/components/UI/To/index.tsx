import { styled } from "../stitches.config";

export const To = styled("a", {
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  color: "black",
  variants: {
    style: {
      none: {},
      primary: {
        display: "flex",
        color: "var(--primary-color)",
        paddingTop: "0.5rem",
        width: "fit-content",
        transition: "border-bottom 2s",
        "&::after": {
          content: "",
          borderBottom: "1px solid #1964e7",
          transform: "scaleX(0)",
          transformOrigin: "100% 50%",
          transition: "transform 250ms ease-in-out 0.1s",
        },
        "&:hover:after": {
          transform: "scaleX(1)",
          transformOrigin: "0% 50%",
        },
      },
    },
  },
});
