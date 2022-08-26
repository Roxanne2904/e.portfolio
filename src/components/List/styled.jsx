import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fontSize } from "../../utils/GlobalStyled";
import { motion } from "framer-motion";

export const StyledList = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  width: ${({ width }) => (width < 800 ? "inherit" : `100%`)};
  height: ${({ width }) => (width < 800 ? `inherit` : `10vmin`)};
  background: ${({ width }) =>
    width < 800 ? `inherit` : `${colors.primaryLessO}`};
  ${({ width, topborder }) =>
    width < 1100
      ? width < 800
        ? `padding:20px; border:none;`
        : `border: ${colors.primary} 2px solid; border-left-style: none; border-top-style: none; border-bottom-style: none;`
      : topborder === "false"
      ? `border: ${colors.primary} 2px solid; border-top-style: none; `
      : `border: ${colors.primary} 2px solid; color:red;`}

  cursor: pointer;
  font-size: ${({ width }) =>
    width < 1100 ? (width < 600 ? `1rem` : `2.5vmin`) : `2.7vmin`};
`;
export const StyledTitle = styled.span`
  color: ${colors.tertiary};
  margin: 0 10px 0 0;
`;
export const StyledLinkA = styled.a`
  text-decoration: none;
  color: ${colors.secondaryDarker};
  font-weight: bold;
  ${(props) =>
    props.$nav === true &&
    `display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;color:${colors.primary};font-weight: inherit;`}
  &:hover {
    ${(props) => props.$nav && `color: ${colors.white};`}
  }
  &:not(:hover) {
    ${(props) =>
      props.$nav &&
      `color: ${colors.primary};
    transition: all 0.5s;`}
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: ${colors.white};
    transition: all 0.5s;
  }
  &:not(:hover) {
    color: ${colors.primary};
    transition: all 0.5s;
  }
  ${(props) =>
    props.$nav &&
    `display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;color:${colors.primary}`}
`;
export const StyledBasicSpan = styled.span`
  color: ${colors.secondaryDarker};
  font-weight: bold;
`;
