import styled from "styled-components";
import { colors, display, cursorPointer } from "../../utils/GlobalStyled";

export const StyledLogo = styled.a`
  display: ${display.block};
  ${(props) => props.bool === true && "display:flex; justify-content:center; "}
  ${cursorPointer}
  svg {
    &:hover {
      fill: ${(props) =>
        props.color === "#FFFFFF"
          ? `${colors.primary}`
          : `${colors.secondaryDarker}`};
      ${(props) =>
        props.color !== "#FFFFFF" &&
        ` background:${colors.primary};border-radius:${
          props.name === "github"
            ? `100%;`
            : props.name !== "instagram"
            ? `10%;`
            : `25%;`
        }`};
      transition: all 500ms;
    }
    &:not(:hover) {
      fill: ${(props) => props.color};
      border-radius: ${(props) =>
        props.name === "github"
          ? `100%`
          : props.name !== "instagram"
          ? `10%;`
          : `25%`};
      transition: all 500ms;
    }
  }
`;
