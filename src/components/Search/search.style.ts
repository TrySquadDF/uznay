import { styled } from "../UI/stitches.config";

export const InputStyle = styled("input", {
  border: "none",
  outline: "none",
  variants: {
    styles: {
      primary: {
        maxWidth: "18rem",
        height: "1.24rem",
        padding: "0.24rem 0.5rem",
        border: "2px solid var(--primary-color)",
        borderRadius: "5px",
      },
      notActive: {
        maxWidth: "18rem",
        height: "1.24rem",
        padding: "0.24rem 0.5rem",
        border: "1px solid rgb(151, 154, 156)",
        borderRadius: "5px",
      },
    },
  },
});

export const FormContainer = styled("form", {
  display: "flex",
  borderRadius: "5px",
  width: "18rem",
  height: "1.25rem",

  variants: {
    paddingLagrgePlatform: {
      defualt: {
        padding: "0.25rem 0.5rem",
        "@mobile": {
          padding: "0",
        },
      },
    },
    color: {
      primary: {
        border: "2px solid var(--primary-color)",
        background: "White",
      },
      grey: {
        border: "1px solid var(--gray-color)",
      },
    },
    mobile: {
      hidden: {
        "@mobile": {
          display: "none",
        },
      },
      styles: {
        "@mobile": {
          width: "100%",
          height: "100%",
          border: "none",
          padding: "0",
        },
      },
    },
    position: {
      absolute: {
        "@mobile": {
          display: "flex",
          position: "absolute",
        },
      },
    },

    boxShadowOnMobile: {
      primary: {
        "@mobile": {
          boxShadow: "0 -10px 20px var(--primary-color)",
        },
      },
    },
  },
});
