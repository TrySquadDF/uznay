import { CssProperty } from "@/types/componentsTypes";
import { styled } from "@stitches/react";

const SvgWrapper = styled("svg", {});

export const Icon = () => {};

Icon.Slash = ({ ...args }: CssProperty) => {
  return (
    <SvgWrapper
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      aria-hidden="true"
      {...args}
    >
      <path
        fill="none"
        stroke="var(--gray-color)"
        opacity=".4"
        d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
      ></path>
      <path fill="var(--gray-color)" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
    </SvgWrapper>
  );
};

Icon.Search = ({ ...args }: CssProperty) => {
  return (
    <SvgWrapper
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        fill="var(--gray-color)"
        fillRule="evenodd"
        d="M12.026 10.626L16 14.6 14.6 16l-3.974-3.974a5.5 5.5 0 1 1 1.4-1.4zM7.5 11.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z"
      ></path>
    </SvgWrapper>
  );
};

Icon.Close = ({ ...args }: CssProperty) => {
  return (
    <SvgWrapper
      {...args}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
        fill="currentColor"
      />
    </SvgWrapper>
  );
};
