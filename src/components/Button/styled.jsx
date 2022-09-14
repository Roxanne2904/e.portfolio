import styled from "styled-components";
import {
  colors,
  buttonAnimation,
  buttonBackToTop,
  pointerEventsAnimation,
} from "../../utils/GlobalStyled";
import { Link } from "react-router-dom";

export const StyledLinkContainer = styled(Link)`
  ${({ width }) => width > 2000 && `margin-top: 2vmin;`}
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  text-decoration: none;
  pointer-events: none;
  animation: ${pointerEventsAnimation} 1s 3500ms both;
`;

export const StyledButtonHover = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  border: solid 1px ${colors.primary};
  padding: 10px 0;
  background: ${colors.primary};
  color: ${colors.secondary};
  font-size: ${({ width, height }) =>
    width < 600 ? "6vmin" : height < 720 ? `1.7rem` : "3.5vmin"};
  cursor: pointer;
  ${StyledLinkContainer}:hover & {
    left: 35%;
    right: 35%;
    border-radius: 10%;
    opacity: 1;
    transition: all 0.5s ease-in;
  }
`;

export const StyledHomeButton = styled.button`
  width: 100%;
  border: solid ${({ width }) => (width > 2000 ? "0.3vmin" : "1px")}
    ${colors.primary};
  padding: 10px 0;
  background: ${colors.secondary};
  color: ${colors.primary};
  font-size: ${({ width, height }) =>
    width < 600 ? "5vmin" : height < 720 ? `1.5rem` : "3vmin"};
  cursor: pointer;
  animation: ${buttonAnimation} 0.8s ease-in-out 2900ms both;
  ${StyledLinkContainer}:hover & {
    opacity: 0;
    transition: all 0.5s ease-in;
  }
`;
export const StyledButton = styled.button`
  display: ${({ display }) => (display === `none` ? "none" : "block")};
  position: fixed;
  bottom: ${({ width }) => (width < 900 ? `2%` : `11.5%`)};
  right: 0;
  font-size: ${({ width }) => (width > 2000 ? `3vmin` : `2rem`)};
  padding: ${({ width }) => (width > 2000 ? `2vmin` : `1rem`)};
  color: ${colors.tertiary};
  border: none;
  box-shadow: 0 0 1rem ${colors.secondaryDarker};
  z-index: 2;
  cursor: pointer;
  background: ${colors.white};
  animation: ${buttonBackToTop} 0.5s ease-in-out;
`;
