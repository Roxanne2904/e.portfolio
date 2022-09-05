import styled from "styled-components";
import { colors, isNotHover } from "../../utils/GlobalStyled";

export const StyledMainContent = styled.li`
  position: relative;
  width: ${({ width, height }) =>
    width < 1800
      ? width < 1000
        ? `100%`
        : `35%`
      : height > 1500
      ? `35%`
      : `20%`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: ${({ width }) =>
    width < 1800
      ? width < 1000
        ? width < 900
          ? `50px 0`
          : `20px 0`
        : `1rem`
      : `1vmin 1vmin`};
  border-radius: 5px;
  box-shadow: 0 0 1rem ${colors.secondaryLessO};
  overflow: hidden;
  height: ${({ width }) =>
    width < 1800 ? (width < 1000 ? `inherit` : `24rem`) : ` 50vmin`};
`;

export const StyledSecondaryTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.tertiary};
  ${isNotHover}
  ${StyledMainContent}:hover & {
    transform: translateY(-91%);
    font-size: ${({ height }) => (height < 720 ? `1.2rem` : `2vmin`)};
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: ${({ height }) => (height < 720 ? `1.2rem` : `2.2vmin`)};
    transition: all 1s;
  }
`;
export const StyledSecondarySmallDevice = styled.h2`
  opacity: 1;
  padding: 10px 0;
  color: ${colors.white};
  background: ${colors.tertiary};
  width: 100%;
  text-align: center;
  ${({ width }) => width < 450 && `font-size:1.2rem;`}
`;
export const StyledSecondaryTitleCopy = styled.div`
  opacity: 0;
  padding-bottom: 15px;
`;
export const StyledTitleTxt = styled.span`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  bottom: 35%;
  border: solid ${({ width }) => (width > 2000 ? `0.2vmin` : `1.5px`)} white;
  box-shadow: 0 0 ${({ width }) => (width > 2000 ? `2vmin` : `1rem`)}
    ${colors.secondaryDarker};
  width: 15vmin;
  height: 15vmin;
  border-radius: 50%;
  color: ${colors.white};
  ${StyledMainContent}:hover & {
    bottom: ${({ height }) => (height < 720 ? `1.2%` : ` 1.1%`)};
    width: 100%;
    height: 6%;
    border-radius: 0%;
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    bottom: ${({ height, width }) =>
      height < 720 ? (width < 1800 ? `35%` : `30%`) : `35%`};
    width: ${({ height }) => (height < 720 ? `8rem` : `15vmin`)};
    height: ${({ height }) => (height < 720 ? `8rem` : `15vmin`)};
    border-radius: 50%;
    transition: all 1s;
  }
`;

export const StyledProjectsParagraph = styled.p`
  text-align: justify;
  max-height: ${({ width, height }) =>
    width < 1800
      ? height < 720
        ? `10rem`
        : width < 700
        ? `13rem`
        : `8rem`
      : height > 1000
      ? `20rem`
      : `12rem`};
  overflow: auto;
  padding: ${({ width, height }) =>
    width <= 900
      ? `4vmin`
      : height <= 600
      ? `0vmin 2vmin`
      : width <= 1000
      ? `4vmin`
      : `1vmin 2vmin`};
  font-size: ${({ width, height }) =>
    width < 900
      ? `0.8rem`
      : height > 900
      ? width < 1000
        ? `1.5vmin`
        : `1.3vmin`
      : height <= 720
      ? `0.8rem`
      : ` 1.6vmin`};
`;
export const StyledUlBlock = styled.div`
  display: ${({ width }) => (width < 900 ? `inherit` : `flex`)};
  flex-wrap: wrap;
  width: 100%;
  background: ${colors.secondary};
  font-weight: bold;
  font-size: 1.5vmin;
`;
// max-height: ${({ width }) => (width < 900 ? `inherit` : ` 10vmin`)};

export const StyledUl = styled.ul`
  background: ${colors.primaryLessO};
  margin: 0.2rem 0.1rem;
  display: flex;
  flex-wrap: wrap;
  width: ${({ width }) => (width < 900 ? `initial` : ` 100%`)};
`;
export const StyledListContent = styled.div`
  position: relative;
  ${({ width }) => width < 900 && `padding-top: 1.5px`};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 97%;
    right: 0;
    left: 0;
    background: linear-gradient(
      0.25turn,
      transparent,
      ${colors.tertiary},
      transparent
    );
  }
`;
export const StyledLogoContent = styled.div`
  text-align: end;
  &:hover {
    color: ${colors.primary};
  }
`;
export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${({ width, height }) =>
    width < 900
      ? `1rem`
      : height < 900
      ? height <= 720
        ? `1rem`
        : `1.9vmin`
      : `1.5vmin`};
  ${(props) =>
    props.$app &&
    `background:${colors.tertiary}; color:${colors.white};padding: ${
      props.width < 900 ? `0.7rem` : props.height < 900 ? `0.9vmin` : `0.8vmin`
    };`}
  &:hover {
    background: ${colors.secondaryDarker};
    color: ${colors.primary};
    transition: all 500ms;
  }
  &:not(:hover) {
    background: ${colors.tertiary};
    color: ${colors.white};
    transition: all 500ms;
  }
`;
export const StyledFigma = styled.div`
  width: 90%;
  font-size: ${({ width, height }) =>
    width < 900
      ? `1rem`
      : width < 1600
      ? height <= 720
        ? `1rem`
        : `1.8vmin`
      : ` 1.7vmin`};
  display: block;
  text-decoration: none;
  a {
    color: ${colors.tertiary};
    font-weight: bold;
    border-bottom: solid 2px transparent;
    &:hover {
      color: ${colors.purple};
      border-bottom: solid 2px ${colors.purple};
      transition: all 500ms;
    }
    &:not(:hover) {
      color: ${colors.tertiary};
      border-bottom: solid 2px transparent;
      transition: all 500ms;
    }
  }
`;
export const StyledTechLi = styled.li`
  color: ${colors.white};
  background: ${colors.tertiary};
  padding: ${({ width }) => (width < 1000 ? `0.2rem 0.5rem` : `1% 4% 1.5%`)};
  margin: ${({ width }) => (width < 900 ? `1% 1% 1% 0` : `0.1rem`)};
  font-size: ${({ width, height }) =>
    width < 900
      ? `0.7rem`
      : width < 1200
      ? height <= 720
        ? `0.8rem`
        : `1.25vmin`
      : height <= 720
      ? `0.8rem`
      : width > 1800
      ? `1rem`
      : `0.7rem`};
`;

export const StyledLinkAppContent = styled.div`
  background: ${colors.tertiary};
  width: 50%;
  margin: 0 0 0.5rem 0.5rem;
`;

export const StyledModelAndGitHubLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
`;
