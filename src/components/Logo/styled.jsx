import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

export const StyledLogo = styled.a`
  display: block;
  ${(props) => props.bool === true && "display:flex; justify-content:center; "}
  cursor: pointer;
  svg {
    &:hover {
      fill: ${colors.primary};
      transition: all 500ms;
    }
    &:not(:hover) {
      fill: ${(props) => props.color};
      transition: all 500ms;
    }
  }
`;
