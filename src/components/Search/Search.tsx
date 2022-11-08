import { useBindFocus } from "h:/project/pet/uznay/src/hooks/useBind";
import { CssProperty } from "@/types/componentsTypes";

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/Box";
import { ButtonBase } from "../UI/ButtonBase/ButtonBase";
import { Icon } from "../UI/Icon";
import { FormContainer, InputStyle } from "./search.style";

export const Search = ({ ...args }: CssProperty) => {
  const ref = useRef<HTMLInputElement>(null);

  const [active, isActive] = useState<boolean>(false);
  const [mobileState, setMobileState] = useState<boolean>(false);

  useBindFocus(ref, "Slash");
  const navigate = useNavigate();

  const sumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current && ref.current?.value.trim()) {
      navigate(`/search?q=${ref.current?.value}`);
    }
  };

  return (
    <>
      <FormContainer
        color={!mobileState && active ? "primary" : "grey"}
        mobile={mobileState ? "styles" : "hidden"}
        position={mobileState ? "absolute" : undefined}
        boxShadowOnMobile={mobileState ? "primary" : undefined}
        paddingLagrgePlatform="defualt"
        onSubmit={sumbit}
        {...args}
      >
        <InputStyle
          data-testid={"search-element"}
          ref={ref}
          css={{
            height: "100%",
            width: "100%",
            "@mobile": {
              padding: "0.25rem 1rem",
              fontSize: "18pt",
            },
          }}
          onFocus={() => {
            isActive(true);
          }}
          onBlur={() => {
            isActive(false);
          }}
        />
        {!active && (
          <Box
            css={{
              "@mobile": {
                display: "none",
              },
            }}
          >
            <Icon.Slash />
          </Box>
        )}
      </FormContainer>
      <ButtonBase
        onClick={() => {
          setMobileState((state) => !state);
        }}
        css={{
          display: "none",
          padding: "0.5rem",
          marginRight: "1rem",
          "@mobile": {
            display: "flex",
            borderRadius: "6px",
          },
        }}
        style="primary"
      >
        {mobileState ? (
          <Icon.Close
            css={{
              color: "var(--gray-color)",
              scale: "0.8",
            }}
          />
        ) : (
          <Icon.Search />
        )}
      </ButtonBase>
    </>
  );
};
