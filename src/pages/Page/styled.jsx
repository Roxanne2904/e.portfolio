import styled from "styled-components";

import {
  colors,
  fontSize,
  afterLineAnimation,
  beforeLineAnimation,
} from "../../utils/GlobalStyled";

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const StyledHeaderContent = styled.div`
  flex: 1;
`;
export const StyledTitle = styled.span`
  display: block;
  position: relative;
  right: 18%;
`;

export const StyledMainTitle = styled.h1`
  font-family: auto;
  top: 5%;
  font-size: ${fontSize.main};
  color: ${colors.tertiary};
  background:${colors.white};
  padding:10px;
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
    animation: ${afterLineAnimation} 1.5s cubic-bezier(0.63, 0.34, 0.35, 0.95) 100ms both;
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
    animation: ${beforeLineAnimation} 1.5s cubic-bezier(0.63, 0.34, 0.35, 0.95) 290ms both;
  }
`;
