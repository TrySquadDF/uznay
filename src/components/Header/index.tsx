import { styled } from "@stitches/react";
import { Grid } from "../Grid";
import { Logo } from "../Logo";
import { Search } from "../Search/Search";
import { Link } from "../UI/Link";

// TODO: превратить NavBar в опшон или длроп бар

const routeItems = [
  {
    path: "/",
    title: "Все",
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
        <Grid.Content display="flex" items="center" justifyContent="right">
          <Search
            css={{ marginRight: "2rem", "@mobile": { marginRight: "0" } }}
          />
        </Grid.Content>
      </Grid>
    </SemanticWrapper>
  );
};
