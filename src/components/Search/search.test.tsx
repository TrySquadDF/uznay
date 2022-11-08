import * as React from "react";
import { act, render } from "@testing-library/react";

import { Search } from "./Search";
import { vi } from "vitest";

describe("Search test", async () => {
  const events = {};
  vi.spyOn(document, "addEventListener").mockImplementation(
    (event, handle, options?) => {
      // @ts-ignore
      events[event] = handle;
    }
  );

  it("Хрю", () => {
    // const {} = render(<Search />);

    expect("");
  });
});
