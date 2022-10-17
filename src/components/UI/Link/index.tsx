import React, { FunctionComponent } from "react";
import { CSS, styled } from "@stitches/react";
import { NavLink } from "react-router-dom";

const LinkStyle = styled("span", {
  background: "rgba(25, 100, 231,0)",
  color: "var(--primary-color)",
  padding: "7px 12px",
  borderRadius: "5px",
  fontFamily: "Segoe UI",
  fontWeight: "500",
  margin: "0 5px",
  variants: {
    fill: {
      primary: {
        transition: "background 0.1s ease-in-out",
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

const hoverStyle: CSS = {
  "&:hover": {
    transition: "background 0.2s ease-in-out",
    backgroundColor: "rgba(0, 0, 0,0.01)",
  },
};

const disableStyle: CSS = {
  cursor: "default",
};

export const Link: FunctionComponent<{
  to: string;
  lable: string;
  end?: boolean;
}> = ({ to, lable, end = true }) => {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
      }}
      end={end}
      data-testid={"link"}
    >
      {({ isActive }: { isActive: boolean }) => {
        return (
          <LinkStyle
            fill={isActive ? "primary" : undefined}
            css={isActive ? disableStyle : hoverStyle}
          >
            {lable}
          </LinkStyle>
        );
      }}
    </NavLink>
  );
};
