import { cleanup, render } from "@testing-library/react";
import React from "react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });

const customRenderObjective = (ui: React.ReactElement) => {
  return render(ui);
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
