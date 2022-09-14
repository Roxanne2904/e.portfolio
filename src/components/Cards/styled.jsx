import styled from "styled-components";
import { colors, isNotHover } from "../../utils/GlobalStyled";

export const StyledMainContent = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: ${({ width, height }) =>
    width < 1800 ? `100%` : height > 1500 ? `35%` : `20%`};
  margin: ${({ width }) =>
    width < 1800
      ? width < 1000
        ? width < 900
          ? `50px 0`
          : `20px 0`
        : `1rem`
      : `1vmin 1vmin`};

  box-shadow: 0 0 1rem ${colors.secondaryLessO};
  overflow: hidden;
  height: ${({ width }) =>
    width < 1800 ? (width < 1000 ? `inherit` : `30rem`) : ` 50vmin`};
`;

export const StyledSecondaryTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.tertiary};
  ${isNotHover}
  font-size: ${({ height, width }) => (width <= 1800 ? `1.5rem` : `1.2rem`)};

  ${StyledMainContent}:hover & {
    transform: ${({ width, height }) =>
      width < 1800 ? ` translateY(-89%)` : ` translateY(-91%)`};
    font-size: ${({ height, width }) =>
      width < 1800 ? `1.5rem` : width > 2000 ? `1.5rem` : `1.2rem`};
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: ${({ height, width }) => (width <= 1800 ? `1.5rem` : `1.2rem`)};
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
  box-shadow: 0 0 ${({ width }) => (width > 2000 ? `2vmin` : `2rem`)}
    ${colors.secondaryDarker};
  bottom: ${({ width, height }) => (width < 1800 ? `30%` : `35%`)};
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  color: ${colors.white};
  ${StyledMainContent}:hover & {
    bottom: ${({ width, height }) => (width < 1800 ? `2%` : `0.9%`)};
    width: 100%;
    height: 7%;
    border-radius: 0%;
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    bottom: ${({ width, height }) => (width < 1800 ? `30%` : `35%`)};
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    transition: all 1s;
  }
`;

export const StyledProjectsParagraph = styled.p`
  text-align: justify;
  overflow: auto;
  margin: 1rem 0;
  padding: ${({ width, height }) =>
    width <= 900
      ? `4vmin`
      : height <= 600
      ? `0vmin 4vmin`
      : width <= 1000
      ? `4vmin`
      : width >= 1800
      ? `1vmin 2vmin`
      : `1vmin 3vmin`};
  font-size: ${({ width, height }) =>
    width < 1800
      ? height < 1200
        ? width < 500
          ? `0.8rem`
          : `1.1rem`
        : width < 1200
        ? width < 1000
          ? width < 500
            ? `1.1rem`
            : `1.25rem`
          : `1.8vmin`
        : `1.5vmin`
      : height < 890
      ? `0.8rem`
      : `1.35vmin`};
`;

// max-height: ${({ width, height }) =>
//     width < 1800
//       ? height < 720
//         ? `10rem`
//         : width < 700
//         ? `13rem`
//         : `8rem`
//       : height > 1000
//       ? `20rem`
//       : `12rem`};

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
      ? width < 350
        ? `0.8rem`
        : `1rem`
      : height < 900
      ? `1.3rem`
      : `1.7vmin`};
  ${(props) =>
    props.$app &&
    `background:${colors.tertiary}; color:${colors.white};padding: ${
      props.width < 900 ? `0.7rem` : props.height < 900 ? `1rem` : `1.2vmin`
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
      ? width < 350
        ? `1rem`
        : `1.2rem`
      : width < 1600
      ? `1.35rem`
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
  padding: ${({ width }) => (width < 1000 ? `0.3rem 0.8rem` : `1% 4% 1.5%`)};
  margin: ${({ width }) => (width < 900 ? `1% 1% 1% 0` : `0.1rem`)};
  font-size: ${({ width, height }) =>
    width < 1800
      ? height < 1000
        ? `1rem`
        : width <= 1200
        ? width < 1000
          ? width < 500
            ? `0.8rem`
            : `1.2rem`
          : `1.6vmin`
        : `1.3vmin`
      : height < 1000
      ? `0.9rem`
      : `1.5vmin`};
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
