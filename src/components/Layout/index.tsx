import { FunctionComponent } from "preact";
import { Header } from "../Header";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
