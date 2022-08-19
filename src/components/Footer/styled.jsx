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
`;

// margin: ${(props) => (props.type !== "logo" ? "2% 2% 2% 1%" : "2% 4% 2% 2%")};

export const StyledSectionContent = styled.section`
  position: relative;
  background: ${colors.white};
  width: 65%;
  box-shadow: 0px 0 1rem ${colors.secondaryLessO};
`;
export const StyledMainContent = styled.div`
  display: flex;
`;
export const StyledListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 2% 4% 3% 2%;
`;
export const StyledSecondaryTitle = styled.h2`
  background: ${colors.white};
  padding: 10px;
  color: ${colors.tertiary};
  box-shadow: 0 0 1rem ${colors.secondaryLessO};
  font-size: 2.5vmin;
`;
export const StyledImgContent = styled.div`
  width: 20vmin;
  display: flex;
  margin: 2% 0 2% 2%;
  align-items: center;
  img {
    width: 100%;
  }
`;
