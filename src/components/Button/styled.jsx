import styled from "styled-components";
import {
  colors,
  buttonAnimation,
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
  animation: ${pointerEventsAnimation} 1s 4000ms both;
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
  font-size: ${({ width }) => (width < 600 ? "6vmin" : "3.5vmin")};
  cursor: pointer;
  animation: ${buttonAnimation} 1500ms cubic-bezier(0.73, 0.71, 0.5, 0.99)
    2900ms both;
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
  font-size: ${({ width }) => (width < 600 ? "5vmin" : "3vmin")};
  cursor: pointer;
  animation: ${buttonAnimation} 1500ms cubic-bezier(0.73, 0.71, 0.5, 0.99)
    2900ms both;
  ${StyledLinkContainer}:hover & {
    opacity: 0;
    transition: all 0.5s ease-in;
  }
`;
export const StyledButton = styled.button`
  display: ${({ display }) => (display === `none` ? "none" : "block")};
  position: fixed;
  bottom: ${({ width }) => (width < 1100 ? `2.5%` : `8%`)};
  right: ${({ width }) => (width < 1100 ? `12%` : `8%`)};
  font-size: ${({ width }) => (width > 2000 ? `5vmin` : `2rem`)};
  padding: ${({ width }) => (width > 2000 ? `2vmin` : `1rem`)};
  color: ${colors.tertiary};
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1rem ${colors.secondaryDarker};
  z-index: 2;
  cursor: pointer;
  background: ${colors.white};
`;
