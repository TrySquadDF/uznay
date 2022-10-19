import React from "react";
import { render } from "../../../utils/test-utils";
import { vi } from "vitest";
import { Link } from ".";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "@testing-library/jest-dom";

describe("Link", async () => {
  it("Должен перенаправить на необходимую страницу", () => {
    const history = createMemoryHistory();
    history.push = vi.fn();

    const { getByText, getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Link to="/test" lable="test" />
      </Router>
    );

    expect(getByText("test")).toBeInTheDocument();

    getByTestId("link").click();
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: "",
        pathname: "/test",
        search: "",
      },
      undefined,
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
      }
    );

    // expect(screen.getByText("test")).toBeInTheDocument();
    // const link = screen.getByRole("link", {});
    // act(() => {
    //   link.click();
    // });
  });
});
