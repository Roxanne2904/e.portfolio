import styled from "styled-components";
import {
  paddingPattern,
  opacity,
  colors,
  display,
} from "../../utils/GlobalStyled";

export const StyledSecondarySmallDevice = styled.h2`
  ${paddingPattern}
  opacity: ${opacity.one};
  color: ${colors.white};
  background: ${colors.tertiary};
  width: 100%;
  text-align: ${display.center};
  font-size: ${({ width, height }) =>
    width < 450
      ? `1.2rem`
      : width >= 1800 && height > 1500
      ? `2rem`
      : `1.1rem`};
`;
