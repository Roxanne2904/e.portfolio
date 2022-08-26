import styled from "styled-components";
import profileImg from "../../assets/img/cv.jpg";
import { colors } from "../../utils/GlobalStyled";
import { motion } from "framer-motion";

export const StyledParagraphContent = styled(motion.div)`
  width: ${({ width }) => (width < 800 ? "100%" : "85%")};
  position: ${({ width }) => (width < 1100 ? "inherit" : "absolute")};
  text-align: justify;
  box-sizing: ${({ width }) => (width < 800 ? "content-box" : "border-box;")};
  box-shadow: ${({ width }) =>
    width < 800 ? `inherit` : `0 0 1rem ${colors.secondaryDarkerLessO};`}
  border-radius: 10px;
  padding: ${({ width }) => (width < 800 ? `inherit` : `20px`)};
  ${({ width }) =>
    width < 800 &&
    `display:flex;flex-direction:column;align-items:center;height: 100vh;`}
`;

export const StyledProfilImage = styled.div`
  float: ${({ width }) => (width < 800 ? "inherit" : "left")};
  background-image: ${({ width }) =>
    width < 800 ? "inherit" : `url(${profileImg})`};
  width: 18vmin;
  height: ${({ width }) => (width < 800 ? "0vmin" : `25vmin`)};
  background-size: 100% 100%;
  border-radius: 50%;
  shape-outside: margin-box;
  margin: ${({ width }) => (width < 800 ? "30px 0 10px 0" : "0 30px 0 0")};
`;

export const StyledWelcomeMsg = styled.span`
  display: contents;
  font-size: ${({ width }) => (width < 800 ? "2.5rem" : "3.5vmin")};
  color: ${colors.tertiary};
  font-family: auto;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ width }) => (width < 800 ? "1rem" : " 1.6vmin")};
  padding: ${({ width }) => (width < 800 ? "25px" : " 10px")};

  ${({ width }) => width < 800 && "overflow: scroll;"}
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
