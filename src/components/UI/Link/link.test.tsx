import "@testing-library/jest-dom";
import { act, render, screen, userEvent } from "../../../utils/test-utils";
import { describe, test } from "vitest";
import { Link } from ".";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to="/test" lable="test" />,
  },
]);

describe("Link", async () => {
  it("Должен перенаправить на необходимую страницу", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    const link = screen.getByRole("link", {});
    act(() => {
      link.click();
    });
  });
});
