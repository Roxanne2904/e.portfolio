import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ width }) => (width < 1200 ? "inherit" : "100vh")};
`;

export const StyledBlockList = styled(motion.ul)`
  display: flex;
  flex-direction: ${({ width }) => (width < 1200 ? "row" : "column")};
  align-items: center;
  list-style-type: none;
  ${({ width }) => width < 800 && `flex-wrap:wrap; justify-content:center;`}
`;
