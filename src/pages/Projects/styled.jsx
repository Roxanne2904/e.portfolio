import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMainContent = styled(motion.ul)`
  display: ${({ width }) => (width < 900 ? `initial` : ` flex`)};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${({ width }) => (width < 900 ? `2% 3%` : ` 12% 3%`)};
`;
