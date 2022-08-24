import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fontSize } from "../../utils/GlobalStyled";
import { motion } from "framer-motion";

export const StyledList = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  width: 100%;
  height: 10vmin;
  background: ${colors.primaryLessO};
  border: ${colors.primary} 2px solid;
  ${(props) => props.noTopBorder === true && `border-top-style: none;`}
  cursor: pointer;
  font-size: ${fontSize.mainLessB};
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
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  ${(props) =>
    props.$nav &&
    `display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;color:${colors.primary}`}
`;
export const StyledBasicSpan = styled.span`
  color: ${colors.secondaryDarker};
  font-weight: bold;
`;
