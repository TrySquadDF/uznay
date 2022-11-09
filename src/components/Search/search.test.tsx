import React, { useEffect, useState } from "react";
import { useKeyboard } from "@/hooks/useKeyboard";
import { useNavigate } from "react-router-dom";

// Тест зависимости ↑↑↑↑ удалил = тупой

import { Router } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

import { Search } from "./Search";
import { vi } from "vitest";
import { createMemoryHistory } from "history";

describe("Search test", async () => {
  const events = new Object();
  const doc = vi
    .spyOn(document, "addEventListener")
    .mockImplementation((event, handelr) => {
      //@ts-ignore
      events[event] = handelr;
    });

  const history = createMemoryHistory();
  history.push = vi.fn();

  const { getByTestId } = render(
    <Router location={history.location} navigator={history}>
      <Search />
    </Router>
  );

  it("Поиск на месте", () => {
    expect(getByTestId("search-element")).toBeInTheDocument();
  });

  it("У поиска есть бинды", () => {
    expect(events.hasOwnProperty("keyup")).toBeTruthy();
  });

  it("Навигация поиска", () => {
    const history = createMemoryHistory();
    history.push = vi.fn();

    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Search />
      </Router>
    );

    const input = getByTestId("search-element") as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: "Russian",
      },
    });

    expect(input.value).toBe("Russian");

    const form = getByTestId("form-search");

    fireEvent.submit(form);

    expect(history.push).toHaveBeenCalledWith(
      {
        hash: "",
        pathname: "/search",
        search: "?q=Russian",
      },
      undefined,
      {}
    );

    expect(events.hasOwnProperty("keyup")).toBeTruthy();
  });
});
