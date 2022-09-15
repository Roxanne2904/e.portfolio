import styled from "styled-components";
import { motion } from "framer-motion";
import {
  colors,
  device,
  flexAlignAndJustifyCenter,
  flexWrap,
  status,
  flexAlignCenter,
  position,
} from "../../utils/GlobalStyled";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  ${flexAlignAndJustifyCenter}
  position: ${position.relative};
`;
export const StyledMainLogoContent = styled(Link)`
  width: 5%;
  margin: 0.8rem 0 0.5rem 0.8rem;
  padding: 0.5rem;
  border: ${colors.primary} solid 1px;
  background: ${colors.primaryLessO};
  box-shadow: 0rem 0rem 0.4rem 0.5rem ${colors.secondaryDarkerLessO};
`;

export const StyledBlockList = styled(motion.ul)`
  ${flexAlignAndJustifyCenter}
  ${flexWrap}
  flex-direction: row;
  list-style-type: ${status.none};
`;

export const StyledNav = styled.nav`
  ${flexAlignCenter}
  width: 100%;
  justify-content: ${({ width }) =>
    width <= 900 ? `center` : `space-between`};
  margin: ${({ width }) => (width < 900 ? `1rem` : `0.3rem`)};
`;
export const StyledBlockListContent = styled(motion.div)`
  background: ${({ width }) =>
    width < device.smallXL ? `transparent` : `${colors.fourth}`};
  transform-origin: right;
`;
