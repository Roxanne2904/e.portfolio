import styled from "styled-components";
import {
  colors,
  display,
  status,
  position,
  flexColumn,
} from "../../utils/GlobalStyled";

export const StyledFooter = styled.footer`
  display: ${display.flex};
`;
export const StyledFooterBlockList = styled.ul`
  display: ${display.flex};
  flex-direction: ${(props) => (props.type !== "logo" ? "column" : "row")};
  list-style-type: ${status.none};
  width: ${(props) =>
    props.type !== "logo"
      ? "100%"
      : props.width < 800
      ? `10rem`
      : props.height < 890
      ? props.width < 1800
        ? `26%`
        : `20%`
      : "15vmin"};
  ${(props) =>
    props.type !== "logo" && props.width < 800
      ? `font-size:1.2rem;`
      : `font-size: ${props.height < 890 ? `1.2rem` : `2.1vmin`} ; `}
  margin: 10px 15px;
`;

// margin: ${(props) => (props.type !== "logo" ? "2% 2% 2% 1%" : "2% 4% 2% 2%")};

export const StyledSectionContent = styled.section`
  position: ${position.relative};
  background: ${({ width }) =>
    width < 400
      ? `${colors.white}`
      : `linear-gradient(
    to right,
    ${colors.tertiary} 0%,
    ${colors.secondaryDarker} 100%
  )`};
  width: 100%;
  box-shadow: 0px 0 ${({ width }) => (width > 2000 ? `2vmin` : `1rem`)}
    ${colors.secondaryLessO};
`;
export const StyledMainContent = styled.div`
  display: ${display.flex};
  width: ${({ width }) => (width < 800 ? `100%` : `45%`)};
  background: white;
  border-radius: 0 100vmin 0% 0;
  z-index: 1;
`;
export const StyledListContent = styled.div`
  ${flexColumn}
  justify-content: space-evenly;
  width: 100%;
  margin: ${({ width }) => (width < 500 ? `6%` : `2%`)} 4% 3% 4%;
`;
export const StyledSecondaryTitle = styled.h2`
  background: ${colors.white};
  padding: ${({ width }) => (width > 2000 ? `1vmin` : `12px`)};
  color: ${colors.tertiary};
  box-shadow: 0 0 ${({ width }) => (width > 2000 ? `1vmin` : `1rem`)}
    ${colors.secondaryLessO};
  font-size: ${({ width, height }) =>
    width < 800
      ? width < 300
        ? `1rem`
        : `1.2rem`
      : height < 890
      ? `1.3rem`
      : `2.5vmin`};
  border-radius: 5px;
`;
export const StyledImgContent = styled.div`
  display: ${display.flex};
  align-items: baseline;
  width: 14vmin;
  margin: 2% 0 2% 2%;
  img {
    width: 100%;
  }
`;
export const StyledTriangle = styled.div`
  position: ${position.absolute};
  right: ${(props) => (props.$smaller ? `98%` : `65%`)};
  ${(props) => props.$smaller && `top:0%;`}
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: ${(props) =>
    props.$smaller ? `24.4px 24.4px 24.4px 0` : `86px 86px 86px 0`};
  border-color: transparent
    ${(props) =>
      props.$smaller ? `${colors.white}` : `${colors.secondaryDarker}`}
    transparent transparent;
`;
export const StyledContactMeBlock = styled.div`
  position: ${position.absolute};
  top: -14%;
  right: 10%;
`;
