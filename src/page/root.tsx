import { FC } from "react";
import { Layout } from "../components/Layout";
import { Outlet } from "react-router-dom";

export const Root: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
