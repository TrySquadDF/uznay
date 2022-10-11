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

export const Header = ({}) => {
  return (
    <header>
      <Grid
        css={{
          height: "4rem",
          gridTemplateColumns: "200px",
          borderBottom: "1px solid var(--gray-color)",
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
    </header>
  );
};
