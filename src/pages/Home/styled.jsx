import styled from "styled-components";

import {
  colors,
  display,
  flexDirection,
  fontSize,
  afterLineAnimation,
  beforeLineAnimation,
} from "../../utils/GlobalStyled";

export const StyledLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 43%;
  justify-content: space-between;
  position: absolute;
  top: 1%;
`;

export const StyledImg = styled.img`
  width: 100%;
`;
export const StyledMainTitle = styled.h1`
  font-size: ${fontSize.main};
  width: 24%;
  text-align: end;
  position: relative;
  bottom: 70px;
  background: ${colors.secondaryLessO};
  box-shadow: 20px -10px 1em ${colors.secondaryDarker};
  padding: 0 1% 0 0;
`;
export const StyledSecondaryTitle = styled.h2`
  position:relative;
  padding: 0 0 10px 0;
  margin: 20px 0;
  width: 100%;
  font-size: 1.5rem;
  background-color: #032628;
  z-index:1;
  &:after {
    content: "";
    display: block;
    position absolute;
    top:65px;
    right:0;
    left:0;
    bottom:0;
    background-color: white;
    animation: ${afterLineAnimation} 1.5s cubic-bezier(0.63, 0.34, 0.35, 0.95) 100ms both;
  }
  &:before {
    content: "";
    display: block;
    position absolute;
    top:-5px;
    right:0;
    left:0;
    bottom:70px;
    background-color: white;
    animation: ${beforeLineAnimation} 1.5s cubic-bezier(0.63, 0.34, 0.35, 0.95) 290ms both;
  }
`;

export const StyledStrongString = styled.span`
  color: ${colors.primary};
  font-family: auto;
  font-size: 4rem;
  font-weight: normal;
`;

export const StyledMainContainer = styled.div`
  display: ${display.flex};
  flex-direction: ${flexDirection.column};
  justify-content: center;
  flex: 1;
  margin: 30px;
  color: ${colors.white};
`;
export const StyledContainer = styled.div`
  width: 95%;
  position: relative;
  display: ${display.flex};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StyledSubtitle = styled.span`
  display: ${display.block};
  font-size: 1.2rem;
`;
export const StyledAboutContainer = styled.div`
  width: 25%;
  position: relative;
  bottom: 70px;
`;
