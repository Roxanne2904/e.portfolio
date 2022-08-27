import styled from "styled-components";

import {
  colors,
  fontSize,
  afterLineAnimationPage,
  beforeLineAnimationPage,
} from "../../utils/GlobalStyled";

export const StyledMainContent = styled.div`
  display: ${({ width }) => (width < 1200 ? "block" : "flex")};
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const StyledHeaderContent = styled.div`
  flex: 1;
`;

export const StyledTitle = styled.span`
  display: block;
  position: relative;
  ${({ width }) => (width < 1200 ? `inherit` : ` right: 18%;`)}
`;

export const StyledMainTitle = styled.h1`
  font-family: auto;
  top: 5%;
  font-size: ${({ width }) =>
    width < 800 ? `1.8rem;` : width > 1950 ? `5vmin` : `${fontSize.main}`};
  color: ${colors.tertiary};
  background:${colors.white};
  padding: ${({ width }) => (width > 1950 ? `2vmin` : `10px`)}; 
  text-align: center;
  &:after {
    content: "";
    display: block;
    position absolute;
    top:63px;
    right:0;
    left:0;
    bottom:0;
    background-color: ${colors.tertiary};
    animation: ${afterLineAnimationPage} 1.5s cubic-bezier(0.63, 0.34, 0.35, 0.95) 100ms both;
  }
  &:before {
    content: "";
    display: block;
    position absolute;
    top:0;
    right:0;
    left:0;
    bottom:63px;
    background-color: ${colors.tertiary};
    animation: ${beforeLineAnimationPage} 1.5s cubic-bezier(0.63, 0.34, 0.35, 0.95) 100ms both;
  }
`;
