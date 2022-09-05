//*styled
import styled from "styled-components";
//*react-router
import { Link } from "react-router-dom";
//*utils
import {
  colors,
  device,
  rightAndLeftNone,
  borderTransparentSolid,
  fontBold,
} from "../../utils/GlobalStyled";
//*framer-Motion
import { motion } from "framer-motion";

// {
// ${flexCenter}
// align-items: center;
// }
export const StyledList = styled.div`
  color: ${colors.primary};
  padding: ${({ width }) =>
    width < device.smallXL ? `1.3rem 2rem` : `2rem 3rem`};
  cursor: pointer;
  ${borderTransparentSolid}
  font-size: ${({ width, height }) =>
    width < device.large
      ? `1.1rem`
      : height < 700
      ? `1rem`
      : width > 2000
      ? `1.5rem`
      : `1.2rem`};
  &:hover {
    color: ${colors.white};
    border: ${colors.primary} solid 2px;
    ${rightAndLeftNone}
    transition: all 0.5s;
  }
  &:not(:hover) {
    color: ${colors.primary};
    ${borderTransparentSolid}
    ${rightAndLeftNone}
    transition: all 1.2s;
  }
`;
export const StyledTitle = styled.span`
  color: ${colors.tertiary};
  margin: 0 10px 0 0;
`;
export const StyledLinkA = styled(motion.a)`
  text-decoration: none;
  color: ${colors.secondaryDarker};
  ${fontBold}
  ${(props) =>
    props.$nav === true && `color:${colors.primary};font-weight: inherit;`}
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
  ${(props) => props.$nav && `color:${colors.primary};`}
`;

export const StyledBasicSpan = styled.span`
  color: ${colors.secondaryDarker};
  ${fontBold}
`;
