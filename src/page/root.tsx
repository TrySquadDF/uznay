import { FC, Suspense } from "react";
import { Layout } from "../components/Layout";
import { Outlet } from "react-router-dom";

export const Root: FC = () => {
  return (
    <Layout>
      <Suspense>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
