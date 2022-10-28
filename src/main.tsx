import ReactDOM from "react-dom/client";
import store from "./models/store";
import App from "./page/app";
import { Root } from "./page/root";
import { TopHeadlines } from "./page/topheadlines";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { ErrorPage } from "./page/error";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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

const model = store.create();
export const StoreContext = createContext(model);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StoreContext.Provider value={model}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
