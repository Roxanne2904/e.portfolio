import styled from "styled-components";
import { motion } from "framer-motion";

//*styled
import { colors, device, flexCenter } from "../../utils/GlobalStyled";

export const StyledMainTitle = styled(motion.h1)`
  display: flex;
  align-items: center;
  z-index: 2;
  background: linear-gradient(0.25turn, #032628, ${colors.tertiary}, #032628);
  color: ${colors.white};
  width: 100%;
  justify-content: center;
  padding: ${({ width }) => (width < device.smallXL ? `0.5rem` : `1rem`)};
  font-size: ${({ width }) =>
    width < device.smallXL ? `1.6rem` : width > 1500 ? `3rem` : `2rem`};
  box-shadow: 0 0 1rem ${colors.secondaryDarker};
`;
export const StyledTitleContent = styled.div`
  position: relative;
  box-shadow: 0 0 1rem ${colors.secondaryDarker};
  z-index: 1;
  ${flexCenter}
  background: linear-gradient(0.25turn, #032628, #021d1e, #021d1e, #032628);
`;
// height: ${({ height, width }) =>
//   height <= device.small && width < 900 ? `inherit` : `8vh`};

export const StyledWrapper = styled.div`
  ${({ width }) =>
    width > 2000 &&
    `width: 2000px;
  margin: 0 auto;`}
`;
