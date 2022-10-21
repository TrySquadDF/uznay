import { styled } from "@/components/UI/stitches.config";

export const MainGrid = styled("div", {
  display: "grid",
  width: "100%",
  height: "1000px",
  gridTemplateRows: "1fr",
  "@desktop": {
    gridTemplateColumns: "300px 1fr",
  },
  "@tablet": {
    gridTemplateColumns: "200px 1fr",
  },
  "@mobile": {
    gridTemplateColumns: "1fr",
  },
});

export const ClMainBlock = styled("div", {
  display: "grid",
  width: "100%",
  maxWidth: "1070px",

  "@desktop": {
    gridTemplateColumns: "400px 300px",
  },
  "@tablet": {
    gridTemplateColumns: "1fr",
  },
  "@mobile": {
    gridTemplateColumns: "1fr",
  },
  "@longDesktop": {
    gridTemplateColumns: "2fr 1fr",
    minWidth: "90%",
  },
});
