import styled from "styled-components";
import profileImg from "../../assets/img/cv.jpg";
import { colors, fontSize } from "../../utils/GlobalStyled";

export const StyledParagraphContent = styled.div`
  width: 85%;
  position: absolute;
  text-align: justify;
  box-sizing: border-box;
  box-shadow: 0 20px 50px ${colors.secondaryDarkerLessO};
  border-radius: 10px;
  padding: 20px;
`;

export const StyledProfilImage = styled.div`
  float: left;
  background-image: url(${profileImg});
  width: 150px;
  height: 210px;
  background-size: 100% 100%;
  border-radius: 50%;
  shape-outside: margin-box;
  margin: 0 30px 0 0;
`;

export const StyledWelcomeMsg = styled.span`
  font-size: ${fontSize.main};
  color: ${colors.tertiary};
  font-family: auto;
`;

export const StyledParagraph = styled.p`
  font-size: ${fontSize.secondary};
  padding: 10px;
`;

export const StyledLink = styled.a`
  color: ${colors.tertiary};
  text-decoration: none;
  &:hover {
    color: ${colors.primary};
  }
`;
