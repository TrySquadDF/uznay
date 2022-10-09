import { styled } from "@stitches/react";
import { FunctionComponent } from "preact";
import { NavLink } from "react-router-dom";

type NavLinkProps =
  | (({ isActive }: { isActive: boolean }) => JSX.CSSProperties | undefined)
  | JSX.CSSProperties;

const TypesNavLink = NavLink as FunctionComponent<{
  to: string;
  style?: NavLinkProps;
  end?: boolean;
}>;

const LinkStyle = styled("span", {
  color: "var(--primary-color)",
  padding: "7px 12px",
  borderRadius: "5px",
  variants: {
    fill: {
      primary: {
        transition: "0.1s all",
        background: "rgba(25, 100, 231,0.03)",
      },
    },
    border: {
      primary: {
        border: "1px solid var(--primary-color)",
      },
    },
  },
});

export const Link: FunctionComponent<{
  to: string;
  lable: string;
  end?: boolean;
}> = ({ to, lable, end = true }) => {
  return (
    <TypesNavLink
      to={to}
      style={{
        textDecoration: "none",
      }}
      end={end}
    >
      {({ isActive }: { isActive: boolean }) => {
        return (
          <LinkStyle fill={isActive ? "primary" : undefined}>{lable}</LinkStyle>
        );
      }}
    </TypesNavLink>
  );
};
