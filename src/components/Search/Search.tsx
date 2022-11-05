import { useBindFocus } from "@/hooks/useBind";
import { CssProperty } from "@/types/componentsTypes";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, InputStyle } from "./search.style";

export const Search = ({ ...args }: CssProperty) => {
  const ref = useRef<HTMLInputElement>(null);
  const [active, isActive] = useState<boolean>(false);

  useBindFocus(ref, "Slash");
  const navigate = useNavigate();

  const sumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current && ref.current?.value.trim()) {
      navigate(`/search?q=${ref.current?.value}`);
    }
  };

  return (
    <FormContainer
      color={active ? "primary" : "grey"}
      onSubmit={sumbit}
      {...args}
    >
      <InputStyle
        ref={ref}
        css={{
          height: "100%",
          width: "100%",
        }}
        onFocus={() => {
          isActive(true);
        }}
        onBlur={() => {
          isActive(false);
        }}
      />
      {!active && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="20"
          aria-hidden="true"
        >
          <path
            fill="none"
            stroke="var(--gray-color)"
            opacity=".4"
            d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
          ></path>
          <path
            fill="var(--gray-color)"
            d="M11.8 6L8 15.1h-.9L10.8 6h1z"
          ></path>
        </svg>
      )}
    </FormContainer>
  );
};
