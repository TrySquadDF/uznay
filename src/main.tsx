import { render } from "preact";
import { App } from "./page/app";
import { Root } from "./page/root";
import { TopHeadlines } from "./page/topheadlines";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/top-headlines",
        element: <TopHeadlines />,
      },
    ],
  },
]);

render(
  <RouterProvider router={router} />,
  document.getElementById("app") as HTMLElement
);
