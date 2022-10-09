import { render } from "preact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Two } from "./two";
import { App } from "./app";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/two",
    element: <Two />,
  },
]);

render(
  <RouterProvider router={router} />,
  document.getElementById("app") as HTMLElement
);
