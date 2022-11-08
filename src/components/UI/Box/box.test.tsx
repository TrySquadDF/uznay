import * as React from "react";
import { render } from "@testing-library/react";
import { Box } from ".";
import { Loader } from "../Loader";

describe("Box test", async () => {
  it("Меня видно!", () => {
    const { getByTestId } = render(
      <Box.Load data-testid="boxloader" isLoad={true}></Box.Load>
    );

    expect(getByTestId("boxloader")).toBeInTheDocument();
  });

  it("Лоадер тут ? Нет, получается контент тут", () => {
    const { getByTestId } = render(
      <Box.Load isLoad={true}>
        <Box data-testid="boxcontent"></Box>
      </Box.Load>
    );

    expect(getByTestId("boxcontent")).toBeInTheDocument();
  });

  it("Лодер есть!", () => {
    const { getByTestId } = render(
      <Box.Load
        isLoad={false}
        Loader={<Loader data-testid="castomsLoaders" />}
      ></Box.Load>
    );

    expect(getByTestId("castomsLoaders")).toBeInTheDocument();
  });

  it("Лодер есть, но не много стандартный!", () => {
    const { getByTestId } = render(<Box.Load isLoad={false} />);

    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
