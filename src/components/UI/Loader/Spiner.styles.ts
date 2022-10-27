import { styled, keyframes } from "../stitches.config";

const spinner = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0.15,
  },
});

export const StyledSpinner = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  size: "1.5rem",
  variants: {
    size: {
      lg: {
        size: "1.25rem",
      },
      xl: {
        size: "1.75rem",
      },
    },
  },
});

export const StyledSpinnerContainer = styled("div", {
  size: "100%",
  position: "relative",
  left: "50%",
  top: "50%",
});

export const StyledSpinnerSpan = styled("span", {
  background: "var(--primary-color)",
  position: "absolute",
  top: "-3.9%",
  width: "24%",
  height: "8%",
  left: "-10%",
  animation: `${spinner} 1.2s linear 0s infinite normal none running`,
  "&:nth-child(1)": {
    animationDelay: "-1.2s",
    transform: "rotate(0deg) translate(146%)",
  },
  "&:nth-child(2)": {
    animationDelay: "-1.1s",
    transform: "rotate(30deg) translate(146%)",
  },
  "&:nth-child(3)": {
    animationDelay: "-1s",
    transform: "rotate(60deg) translate(146%)",
  },
  "&:nth-child(4)": {
    animationDelay: "-0.9s",
    transform: "rotate(90deg) translate(146%)",
  },

  "&:nth-child(5)": {
    animationDelay: "-0.8s",
    transform: "rotate(120deg) translate(146%)",
  },
  "&:nth-child(6)": {
    animationDelay: "-0.7s",
    transform: "rotate(150deg) translate(146%)",
  },

  "&:nth-child(7)": {
    animationDelay: "-0.6s",
    transform: "rotate(180deg) translate(146%)",
  },
  "&:nth-child(8)": {
    animationDelay: "-0.5s",
    transform: "rotate(210deg) translate(146%)",
  },
  "&:nth-child(9)": {
    animationDelay: "-0.4s",
    transform: "rotate(240deg) translate(146%)",
  },
  "&:nth-child(10)": {
    animationDelay: "-0.3s",
    transform: "rotate(270deg) translate(146%)",
  },
  "&:nth-child(11)": {
    animationDelay: "-0.2s",
    transform: "rotate(300deg) translate(146%)",
  },
  "&:nth-child(12)": {
    animationDelay: "-0.1s",
    transform: "rotate(330deg) translate(146%)",
  },
});

export const StyledLoadingLabel = styled("label", {
  marginTop: "1rem",
  color: "var(--primary-color)",
  fontSize: "14pt",
  "*": {
    margin: 0,
  },
});
