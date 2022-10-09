import { Grid } from "../Grid";
import { Logo } from "../Logo";
import { Link } from "../UI/Link";

const routeItems = [
  {
    path: "/",
    title: "Главная",
  },
];

export const Header = ({}) => {
  return (
    <header>
      <Grid
        css={{
          height: "4rem",
          gridTemplateColumns: "200px",
          outline: "1px solid var(--gray-color)",
        }}
        flow="column"
        items="center"
      >
        <Grid.Content children={<Logo />} />
        <Grid.Content display="flex" items="center">
          <Link to="/" lable="Главная" />
          <Link to="/two" lable="Two"></Link>
        </Grid.Content>
      </Grid>
    </header>
  );
};
