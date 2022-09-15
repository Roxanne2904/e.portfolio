import styled from "styled-components";

import {
  colors,
  display,
  cornerPattern,
  position,
  opacity,
  flexAlignAndJustifyCenter,
  flexCenter,
  isNotHover,
  fontSizeTitleCard,
  WidthHeightPattern,
} from "../../utils/GlobalStyled";

import { StyledMainContent } from "../Card/styled";

export const StyledSecondaryTitle = styled.h2`
  ${flexCenter}
  ${isNotHover}
  align-items: ${display.center};
  background: ${colors.tertiary};
  ${(props) => fontSizeTitleCard(props)}
  ${StyledMainContent}:hover & {
    transform: ${({ width, height }) =>
      width < 1800 ? ` translateY(-89%)` : ` translateY(-91%)`};
    ${(props) => fontSizeTitleCard(props)}
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    ${cornerPattern}
    ${(props) => fontSizeTitleCard(props)}
    transition: all 1s;
  }
`;

export const StyledTitleTxt = styled.span`
  ${flexAlignAndJustifyCenter}
  ${WidthHeightPattern}
  position: ${position.absolute};
  text-align: center;
  color: ${colors.white};
  box-shadow: 0 0 ${({ width }) => (width > 2000 ? `2vmin` : `2rem`)}
    ${colors.secondaryDarker};
  bottom: ${({ width, height }) => (width < 1800 ? `30%` : `35%`)};
  border-radius: 50%;
  ${StyledMainContent}:hover & {
    bottom: ${({ width, height }) => (width < 1800 ? `2%` : `0.9%`)};
    width: 100%;
    height: 6.9%;
    border-radius: 0%;
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    ${WidthHeightPattern}
    bottom: ${({ width, height }) => (width < 1800 ? `30%` : `35%`)};
    border-radius: 50%;
    transition: all 1s;
  }
`;

export const StyledSecondaryTitleCopy = styled.div`
  opacity: ${opacity.zero};
  padding-bottom: 15px;
`;

export const StyledDate = styled.span`
  position: absolute;
  bottom: 1.2%;
  right: 3%;
  color: ${colors.white};
  font-weight: 400;
  font-size: 0.9rem;
`;
