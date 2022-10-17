import "@testing-library/jest-dom";
import { act, render, screen, userEvent } from "../../../utils/test-utils";
import { describe, test, vi } from "vitest";
import { Link } from ".";
import {
  createBrowserRouter,
  RouterProvider,
  MemoryRouter,
  Router,
} from "react-router-dom";
import { createMemoryHistory } from "history";
import React from "react";

describe("Link", async () => {
  it("Должен перенаправить на необходимую страницу", () => {
    const history = createMemoryHistory();
    history.push = vi.fn();

    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Link to="/test" lable="test" />
      </Router>
    );

    expect(getByText("test")).toBeInTheDocument();
    userEvent.click();

    // expect(screen.getByText("test")).toBeInTheDocument();
    // const link = screen.getByRole("link", {});
    // act(() => {
    //   link.click();
    // });
  });
});
