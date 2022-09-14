import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWrapper = styled(motion.div)`
  ${({ width }) =>
    width < 1800
      ? width < 1000
        ? `margin:1rem;`
        : `width: 900px;
margin: 0 auto;`
      : `width:100%;`}
`;
export const StyledMainContent = styled.ul`
  display: ${({ width }) => (width < 900 ? `initial` : ` flex`)};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${({ width }) =>
    width < 1000 ? (width < 900 ? `2% 3%` : `8% 3%`) : ` 8% 3%`};
`;
