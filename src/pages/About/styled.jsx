import styled from "styled-components";
import profileImg from "../../assets/img/cv.jpg";
import { colors, fontSize } from "../../utils/GlobalStyled";
import { motion } from "framer-motion";

export const StyledParagraphContent = styled(motion.div)`
  width: 85%;
  position: absolute;
  text-align: justify;
  box-sizing: border-box;
  box-shadow: 0 0 1rem ${colors.secondaryDarkerLessO};
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
  font-size: 1.6vmin;

  padding: 10px;
`;

export const StyledLink = styled.a`
  color: ${colors.tertiary};
  text-decoration: none;
  &:hover {
    color: ${colors.primary};
  }
`;
export const StyledSignatureContent = styled.span`
  display: flex;
  justify-content: end;
  margin: 0 50px 0 50px;
  position: relative;
  bottom: 20px;
`;
