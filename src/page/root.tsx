import { Layout } from "../components/Layout";
import { FunctionComponent } from "preact";
import { Outlet } from "react-router-dom";

export const Root: FunctionComponent = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
