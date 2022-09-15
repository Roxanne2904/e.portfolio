import styled from "styled-components";
import profileImg from "../../assets/img/cv.jpg";
import {
  colors,
  device,
  flexColumn,
  status,
  position,
  display,
} from "../../utils/GlobalStyled";
import { motion } from "framer-motion";

export const StyledParagraphContent = styled(motion.div)`
  background: ${colors.white};
  width: ${({ width }) =>
    width < device.medium
      ? "100%"
      : width >= device.XXlarge
      ? `100%`
      : "1300px"};
  ${({ width }) => width < device.medium && "margin: 0 auto"};
  text-align: justify;
  box-sizing: ${({ width }) =>
    width < device.medium ? "content-box" : "border-box;"};
  box-shadow: ${({ width }) =>
    width < device.medium
      ? `inherit`
      : `0 0 ${width > 1700 ? `5vmin` : `1rem`} ${
          colors.secondaryDarkerLessO
        }`};

  padding: ${({ width }) =>
    width < device.medium
      ? `2rem 0 0 0`
      : width >= device.XXlarge
      ? `5rem 2rem;`
      : `5rem 2rem 1rem 2rem`};
  ${({ width }) => width < device.medium && `${flexColumn};align-items:center;`}
`;

export const StyledProfilImage = styled.div`
  float: ${({ width }) => (width < device.medium ? "inherit" : "left")};
  background-image: ${({ width }) =>
    width < device.medium ? "inherit" : `url(${profileImg})`};
  width: ${({ width }) => (width >= device.XXlarge ? `17.5rem` : `10.5rem`)};
  height: ${({ width }) =>
    width < device.medium
      ? "0vmin"
      : width >= device.XXlarge
      ? `25rem`
      : `15rem`};
  background-size: 100% 100%;
  border-radius: 50%;
  shape-outside: margin-box;
  margin: ${({ width }) =>
    width < device.medium ? "30px 0 10px 0" : "0 30px 0 0"};
`;

export const StyledWelcomeMsg = styled.span`
  display: ${({ width }) => (width >= device.XXlarge ? `flex` : `contents`)};
  font-size: ${({ width }) =>
    width < device.medium ? "3rem" : width >= 1500 ? `4rem` : "2.8rem"};
  color: ${colors.tertiary};
  font-family: auto;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ width, height }) =>
    width < device.medium
      ? width < 500
        ? `1.2rem`
        : "1.3rem"
      : width >= device.XXlarge || height > device.large
      ? `1.5rem`
      : "1.1rem"};
  padding: ${({ width }) => (width < device.medium ? "25px" : " 10px")};

  ${({ width }) => width < device.medium && "overflow: scroll;"}
`;

export const StyledLink = styled.a`
  color: ${colors.tertiary};
  text-decoration: ${status.none};
  &:hover {
    color: ${colors.primary};
  }
`;
export const StyledSignatureContent = styled.span`
  display: ${display.flex};
  position: ${position.relative};
  justify-content: end;
  margin: 0 50px 0 50px;
  bottom: 20px;
`;
