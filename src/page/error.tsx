import { Heading } from "@/components/UI/Heading";
import { keyframes, styled } from "@/components/UI/stitches.config";
import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";

// TO DO: вынести за "Страницу" роутинг комноненты.

const ErrorStyle = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Lamp = keyframes({
  "0%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.15,
  },
  "100%": {
    opacity: 1,
  },
});

const Text = styled("span", {
  color: "var(--primary-color)",
  animation: `${Lamp} 1.5s linear 0s infinite normal none running`,
  userSelect: "none",
  "@tablet": {
    padding: "0 2rem",
  },
  "@mobile": {
    padding: "0 2rem",
  },
});

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorStyle>
        <Text>
          <Heading>{error.status}</Heading>
        </Text>
      </ErrorStyle>
    );
  }

  const errorTyped = error as Error;

  return (
    <ErrorStyle>
      <Text>
        <Heading title="error">
          {errorTyped["message"] ? errorTyped["message"] : "Oppps"}
        </Heading>
      </Text>
    </ErrorStyle>
  );
};
