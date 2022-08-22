import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

export const StyledFooter = styled.footer`
  display: flex;
`;
export const StyledFooterBlockList = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.type !== "logo" ? "column" : "row")};
  list-style-type: none;
  width: ${(props) => (props.type !== "logo" ? "100%" : "15vmin")};
  ${(props) => props.type !== "logo" && `font-size:2.1vmin; `}
  margin: 10px 15px;
`;

// margin: ${(props) => (props.type !== "logo" ? "2% 2% 2% 1%" : "2% 4% 2% 2%")};

export const StyledSectionContent = styled.section`
  position: relative;
  background: linear-gradient(
    to right,
    ${colors.tertiary} 0%,
    ${colors.secondaryDarker} 100%
  );
  width: 100%;
  box-shadow: 0px 0 1rem ${colors.secondaryLessO};
`;
export const StyledMainContent = styled.div`
  display: flex;
  width: 45%;
  background: white;
  border-radius: 0 100vmin 0% 0;
  z-index: 1;
`;
export const StyledListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  margin: 2% 4% 3% 4%;
`;
export const StyledSecondaryTitle = styled.h2`
  background: ${colors.white};
  padding: 10px;
  color: ${colors.tertiary};
  box-shadow: 0 0 1rem ${colors.secondaryLessO};
  font-size: 2.5vmin;
  border-radius: 5px;
`;
export const StyledImgContent = styled.div`
  width: 14vmin;
  display: flex;
  margin: 2% 0 2% 2%;
  align-items: baseline;
  img {
    width: 100%;
  }
`;
export const StyledTriangle = styled.div`
  position: absolute;

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
