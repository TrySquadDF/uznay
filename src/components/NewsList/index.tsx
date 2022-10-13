import { styled } from "../UI/stitches.config";
import { PropsReactCSSVariant } from "@/types/componentsTypes";

const Wrapper = styled("ul", {
  display: "grid",
  gridAutoRows: "fit-contetn",
  margin: 0,
  padding: 0,
});

export const NewsList = ({
  children,
  ...args
}: PropsReactCSSVariant<typeof Wrapper>) => {
  return <Wrapper {...args}>{children}</Wrapper>;
};

NewsList.Items = styled("li", {
  listStyleType: "none",
  fontSize: "14px",
  padding: "10px 20px",
  span: {
    color: "var(--primary-color)",
    marginRight: "5px",
    fontSize: "11px",
    lineHeight: "19px",
  },
});

NewsList.To = styled("a", {
  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "var(--primary-color)",
  },
});

// font-size: 14px;
// line-height: 18px;
// border: 0;
// display: block;
// overflow: hidden;
// padding: 10px 20px;
