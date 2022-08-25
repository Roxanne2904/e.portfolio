import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ width }) => (width < 1100 ? "inherit" : "100vh")};
`;

export const StyledBlockList = styled(motion.ul)`
  display: flex;
  flex-direction: ${({ width }) => (width < 1100 ? "row" : "column")};
  align-items: center;
  list-style-type: none;
`;
