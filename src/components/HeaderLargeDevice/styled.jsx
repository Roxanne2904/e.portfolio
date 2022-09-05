import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, device } from "../../utils/GlobalStyled";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: ${({ width }) =>
    width <= 900 ? `center` : `space-between`};
  margin: ${({ width }) => (width < 900 ? `1rem` : `0.3rem`)};
`;
export const StyledBlockListContent = styled(motion.div)`
  background: ${({ width }) =>
    width < device.smallXL ? `transparent` : `${colors.fourth}`};
  transform-origin: right;
`;
