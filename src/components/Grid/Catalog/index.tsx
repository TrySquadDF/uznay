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
