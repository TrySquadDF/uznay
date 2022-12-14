import React from "react";
import ReactDOM from "react-dom/client";

import store from "./models/store";

import { Root } from "./page/root";
import { TopHeadlines } from "./page/topheadlines";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, lazy, Suspense } from "react";

import "./index.css";
import { model, StoreContext } from "./hooks/useStore";

const ErrorPage = lazy(() => import("./page/error"));
const Search = lazy(() => import("./page/search"));
const App = lazy(() => import("./page/app"));

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
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StoreContext.Provider value={model}>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </StoreContext.Provider>
);
