import styled from "styled-components";
import {
  colors,
  buttonAnimation,
  pointerEventsAnimation,
} from "../../utils/GlobalStyled";
import { Link } from "react-router-dom";

export const StyledLinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  text-decoration: none;
  pointer-events: none;
  animation: ${pointerEventsAnimation} 1s 2.4s both;
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
  font-size: 2.5rem;
  cursor: pointer;
  animation: ${buttonAnimation} 1.5s cubic-bezier(0.73, 0.71, 0.5, 0.99) 1.2s
    both;
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
  border: solid 1px ${colors.primary};
  padding: 10px 0;
  background: ${colors.secondary};
  color: ${colors.primary};
  font-size: 2.5rem;
  cursor: pointer;
  animation: ${buttonAnimation} 1.5s cubic-bezier(0.73, 0.71, 0.5, 0.99) 1.2s
    both;
  ${StyledLinkContainer}:hover & {
    opacity: 0;
    transition: all 0.5s ease-in;
  }
`;
export const StyledButton = styled.button``;
