import { styled } from "@stitches/react";
import { Grid } from "../Grid";
import { Logo } from "../Logo";
import { Link } from "../UI/Link";

const routeItems = [
  {
    path: "/",
    title: "Все",
  },
  {
    path: "/top-headlines",
    title: "Главное",
  },
];

const SemanticWrapper = styled("header", {
  top: "0",
  position: "sticky",
});

export const Header = ({}) => {
  return (
    <SemanticWrapper>
      <Grid
        css={{
          height: "4rem",
          gridTemplateColumns: "200px",
          background: "white",
          borderBottom: "1px solid var(--gray-color)",
          overflow: "auto",
        }}
        flow="column"
        items="center"
      >
        <Grid.Content children={<Logo />} />
        <Grid.Content display="flex" items="center">
          {routeItems.map(({ path, title }) => (
            <Link to={path} lable={title} key={title} />
          ))}
        </Grid.Content>
      </Grid>
    </SemanticWrapper>
  );
};
