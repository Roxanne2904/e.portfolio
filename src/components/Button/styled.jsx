import styled from "styled-components";
import {
  colors,
  buttonAnimation,
  buttonBackToTop,
  pointerEventsAnimation,
  flexAlignCenter,
  flexDirection,
  position,
  status,
  absolutePattern,
  opacity,
  paddingPattern,
  cursorPointer,
} from "../../utils/GlobalStyled";
import { Link } from "react-router-dom";

export const StyledLinkContainer = styled(Link)`
  ${({ width }) => width > 2000 && `margin-top: 2vmin;`}
  ${flexAlignCenter}
  flex-direction: ${flexDirection.column};
  position: ${position.relative};
  width: 100%;
  text-decoration: ${status.none};
  pointer-events: ${status.none};
  animation: ${pointerEventsAnimation} 1s 3500ms both;
`;

export const StyledButtonHover = styled.button`
  ${absolutePattern}
  ${paddingPattern}
  opacity: ${opacity.zero};
  border: solid 1px ${colors.primary};
  background: ${colors.primary};
  color: ${colors.secondary};
  font-size: ${({ width, height }) =>
    width < 600 ? "6vmin" : height < 720 ? `1.7rem` : "3.5vmin"};
  cursor: pointer;
  ${StyledLinkContainer}:hover & {
    left: 35%;
    right: 35%;
    border-radius: 10%;
    opacity: ${opacity.one};
    transition: all 0.5s ease-in;
  }
`;

export const StyledHomeButton = styled.button`
  ${paddingPattern}
  ${cursorPointer}
  width: 100%;
  border: solid ${({ width }) => (width > 2000 ? "0.3vmin" : "1px")}
    ${colors.primary};
  background: ${colors.secondary};
  color: ${colors.primary};
  font-size: ${({ width, height }) =>
    width < 600 ? "5vmin" : height < 720 ? `1.5rem` : "3vmin"};
  animation: ${buttonAnimation} 0.8s ease-in-out 2900ms both;
  ${StyledLinkContainer}:hover & {
    opacity: ${opacity.zero};
    transition: all 0.5s ease-in;
  }
`;
export const StyledButton = styled.button`
  display: ${({ display }) => (display === `none` ? "none" : "block")};
  position: ${position.fixed};
  bottom: ${({ width }) => (width < 900 ? `2%` : `11.5%`)};
  right: 0;
  font-size: ${({ width }) => (width > 2000 ? `3vmin` : `2rem`)};
  padding: ${({ width }) => (width > 2000 ? `2vmin` : `1rem`)};
  color: ${colors.tertiary};
  border: ${status.none};
  box-shadow: 0 0 1rem ${colors.secondaryDarker};
  ${cursorPointer}
  background: ${colors.white};
  animation: ${buttonBackToTop} 0.5s ease-in-out;
  z-index: 2;
`;
