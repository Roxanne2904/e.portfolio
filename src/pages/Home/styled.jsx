import styled from "styled-components";

import {
  colors,
  display,
  flexDirection,
  afterLineAnimation,
  beforeLineAnimation,
  opacityAnimation,
} from "../../utils/GlobalStyled";

export const StyledLogosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 15%;
  justify-content: space-between;
  position: absolute;
  list-style-type: none;
  animation: ${opacityAnimation} 1500ms 1500ms both;
  z-index: 2;
`;
export const StyledCurrentContent = styled.div`
  position: relative;
  text-align: center;
  width: ${({ width }) =>
    width > 900 ? (width < 1100 ? `40%` : `25%`) : width > 600 ? `60%` : `85%`};
`;

export const StyledImg = styled.img`
  width: 100%;
  animation: ${opacityAnimation} 1500ms both;
`;
export const StyledMainTitle = styled.h1`
  font-size: ${({ width, height }) =>
    width < 1100
      ? width < 600
        ? "5vmin"
        : height < 720
        ? `1.5rem`
        : "3vmin"
      : height < 720
      ? `1.6rem`
      : height < 1000
      ? `1.5rem`
      : "2vmin"};
  text-align: end;
  position: absolute;
  bottom: 5px;
  background: ${colors.secondaryDarkerLessO};
  box-shadow: 20px -10px 1em ${colors.dark};
  padding: 0 2% 0 0;
  width: 98%;
  animation: ${opacityAnimation} 1500ms 1500ms both;
`;
export const StyledSecondaryTitle = styled.h2`
  position:relative;
  padding: 10px 0;
  margin: 20px 0;
  width: 100%;
  font-size:${({ width, height }) =>
    width < 1100
      ? width < 600
        ? "4vmin"
        : height < 720
        ? `1.3rem`
        : "2.5vmin"
      : height < 720
      ? `1rem`
      : "2vmin"};
  background-color: ${colors.secondaryDarker};
  z-index:1;
  &:after {
    content: "";
    display: block;
    position absolute;
    top:95%;
    right:0;
    left:0;
    bottom:0;
    background-color: white;
    animation: ${afterLineAnimation} 1500ms cubic-bezier(0.63, 0.34, 0.35, 0.95) 2100ms both;
  }
  &:before {
    content: "";
    display: block;
    position absolute;
    top:0;
    right:0;
    left:0;
    bottom:95%;
    background-color: white;
    animation: ${beforeLineAnimation} 1500ms cubic-bezier(0.63, 0.34, 0.35, 0.95) 2500ms both;
  }
`;

export const StyledStrongString = styled.span`
  color: ${colors.primary};
  font-family: auto;
  font-size: ${({ width, height }) =>
    width < 1100
      ? width < 600
        ? "15vmin"
        : height < 720
        ? `4rem`
        : "9vmin"
      : height < 720
      ? `4.2rem`
      : height < 1000
      ? `5rem`
      : "7vmin"};
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
  width: 100%;
  position: relative;
  display: ${display.flex};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StyledSubtitle = styled.span`
  display: ${display.block};
  font-size: ${({ width, height }) =>
    width < 1100
      ? width < 600
        ? "3.5vmin"
        : height
        ? `1rem`
        : "2vmin"
      : height < 720
      ? `0.8rem`
      : "1.5vmin"};
`;
export const StyledAboutContainer = styled.div`
  width: ${({ width }) =>
    width > 900 ? (width < 1100 ? `40%` : `25%`) : width > 600 ? `60%` : `85%`};
  animation: ${opacityAnimation} 1500ms 2000ms both;
`;
