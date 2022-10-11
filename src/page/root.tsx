import { Layout } from "../components/Layout";
import { Outlet } from "react-router-dom";
import { FunctionComponent } from "preact";

export const Root: FunctionComponent = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
