import styled from "@emotion/styled";
import {
  ElementType,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  forwardRef,
} from "react";

import { Color } from "./";
import { Tablet } from "./breakpoints";
import { primaryBlue, primaryGrey, white } from "./colors";

type Apperance = "blue" | "transparent" | "white";

type Sizes = "s" | "sm" | "m" | "shrink" | "stretch";

type ButtonTypes = "button" | "submit" | "reset";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  apperance?: Apperance;
  as?: ElementType;
  size?: Sizes;
  type?: ButtonTypes;
};

const getAppearanceStyle = (appearance: Apperance) => {
  const style: {
    [key: string]: { bg: string; color: Color; hoverBg: string };
  } = {
    blue: {
      bg: primaryBlue,
      color: white,
      hoverBg: primaryBlue,
    },
    transparent: {
      bg: "transparent",
      color: primaryGrey,
      hoverBg: "transparent",
    },
    white: {
      bg: "transparent",
      color: white,
      hoverBg: primaryBlue,
    },
  };

  return style[appearance];
};
// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  (
    {
      children,
      onClick,
      apperance = "blue",
      as,
      size = "m",
      type,
    }: PropsWithChildren<Props>,
    ref?: Ref<HTMLButtonElement>
  ) => (
    <StyledButton
      ref={ref}
      onClick={onClick}
      apperance={apperance}
      as={as}
      size={size}
      type={type}
    >
      {children}
    </StyledButton>
  )
);

const StyledButton = styled.button<{ apperance: Apperance; size: Sizes }>`
  position: relative;
  box-sizing: border-box;
  width: ${({ size }) => {
    switch (size) {
      case "shrink":
        return "min-content";
      case "stretch":
        return "100%";
      default:
        return "max-content";
    }
  }};
  border: ${({ apperance }) =>
    apperance === "white" ? `2px solid ${white}` : "none"};
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ apperance }) => getAppearanceStyle(apperance).bg};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${({ size }) => {
    switch (size) {
      case "shrink":
        return "0px";
      case "s":
        return "12px 20px";
      default:
        return "12px 20px";
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case "shrink":
        return "auto";
      case "s":
      case "sm":
        return "42px";
      default:
        return "48px";
    }
  }};
  text-transform: uppercase;
  color: ${({ apperance }) => getAppearanceStyle(apperance).color};
  font-size: 16px;
  font-weight: ${({ apperance }) => (apperance === "white" ? "700" : "500")};
  letter-spacing: 0.8px;
  line-height: ${({ size }) => (size === "shrink" ? "10px" : "30px")};

  ${Tablet} {
    line-height: ${({ size }) => (size === "shrink" ? "10px" : "16px")};
  }

  &:hover {
    transform: ${({ size }) => {
      switch (size) {
        case "shrink":
          return "scale(1.2)";
        default:
          return "scale(1.05)";
      }
    }};
    background-color: ${({ apperance }) =>
      getAppearanceStyle(apperance).hoverBg};
    border: ${({ apperance }) =>
      apperance === "white" ? "2px solid transparent" : "none"};

    & svg {
      transition: all 0.2s ease-in-out;
      color: ${primaryBlue};
      fill: ${primaryBlue};
      background: ${white};
      border-radius: 5px;
    }
  }
`;
