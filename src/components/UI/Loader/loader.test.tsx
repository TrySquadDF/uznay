import * as React from "react";
import { render } from "../../../utils/test-utils";
import { Loader } from ".";

describe("Loader Test State", async () => {
  it("Загрузчик видно", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("loader")).toBeInTheDocument();
  });

  it("Загрзучик такой же Зеленый как и был", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("loader")).toMatchSnapshot();
  });
});
