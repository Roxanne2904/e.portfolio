import styled from "styled-components";
import { motion } from "framer-motion";

//*styled
import { colors, device, flexCenter } from "../../utils/GlobalStyled";

export const StyledMainTitle = styled(motion.h1)`
  display: flex;
  align-items: center;
  position: ${({ width, height }) =>
    height <= device.small
      ? `initial`
      : height > 1000
      ? `initial`
      : width < device.smallXL
      ? `initial`
      : `absolute`};
  bottom: ${({ width, height }) =>
    width < device.medium
      ? width < device.smallXL
        ? `20%`
        : `-33%`
      : height > 1000
      ? `20%`
      : `-50%`};
  z-index: 2;
  background: ${colors.tertiary};
  color: ${colors.white};
  padding: ${({ width }) => (width < device.smallXL ? `0.5rem` : `1rem`)};
  ${({ width }) => width < device.smallXL && `font-size:1.6rem`};
  ${({ width }) => width < device.smallXL && `width:100%`};
  ${({ height }) => height < device.smallXL && `width:100%`};
  ${({ width }) => width < device.smallXL && `justify-content:center`};
  ${({ height }) => height < device.smallXL && `justify-content:center`};
  box-shadow: 0 0 1rem ${colors.secondaryDarker};
`;
export const StyledTitleContent = styled.div`
  position: relative;
  height: ${({ height }) => (height <= device.small ? `inherit` : `8vh`)};
  box-shadow: 0 0 1rem ${colors.secondaryDarker};
  z-index: 1;
  ${flexCenter}
  background: linear-gradient(0.25turn, #032628, #021d1e, #021d1e, #032628);
`;
export const StyledWrapper = styled.div`
  ${({ width }) =>
    width > 2000 &&
    `width: 2000px;
  margin: 0 auto;`}
`;
