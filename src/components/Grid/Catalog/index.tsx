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
  display: "flex",
  width: "100%",
  maxWidth: "1070px",
  padding: "2rem 1.5rem 0 1.5rem",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "20px",
  "@tablet": {
    gridTemplateColumns: "1fr",
  },
  "@mobile": {
    gridTemplateColumns: "1fr",
    padding: "2rem 0.25rem 0 0.25rem ",
  },
  "@longDesktop": {
    gridTemplateColumns: "1fr 1fr 1fr",
    minWidth: "90%",
  },
});

// export const ClMainBlock = styled("div", {
//   display: "grid",
//   width: "100%",
//   maxWidth: "1070px",
//   padding: "2rem 1.5rem 0 1.5rem",
//   gridTemplateColumns: "2fr 1fr",
//   "@tablet": {
//     gridTemplateColumns: "1fr",
//   },
//   "@mobile": {
//     gridTemplateColumns: "1fr",
//     padding: "2rem 0.25rem 0 0.25rem ",
//   },
//   "@longDesktop": {
//     gridTemplateColumns: "2fr 1fr",
//     minWidth: "90%",
//   },
// });
