import * as React from "react";
import { render } from "../../../utils/test-utils";

import { Image } from ".";

describe("Image", async () => {
  it("Картинка и стандратные пропысы тоже есть!", () => {
    const { getByTestId } = render(<Image data-testid="img" />);
    expect(getByTestId("img")).toBeInTheDocument();
  });
  it("Пропсы тоже есть!", () => {
    const { getByAltText } = render(<Image alt="ImgEst" />);
    expect(getByAltText("ImgEst")).toBeInTheDocument();
  });
});
