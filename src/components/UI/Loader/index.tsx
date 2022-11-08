import React, { FC } from "react";
import {
  StyledLoadingLabel,
  StyledSpinner,
  StyledSpinnerContainer,
  StyledSpinnerSpan,
} from "./Spiner.styles";

export const Loader: FC<React.PropsWithChildren> = ({ children, ...args }) => {
  return (
    <StyledSpinner data-testid={"loader"} {...args}>
      <StyledSpinnerContainer>
        {[...new Array(12)].map((_, index) => (
          <StyledSpinnerSpan key={`uznayui-spinner-${index}`} />
        ))}
      </StyledSpinnerContainer>
      {children && <StyledLoadingLabel>{children}</StyledLoadingLabel>}
    </StyledSpinner>
  );
};
