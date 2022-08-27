import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";
import { animationRules } from "../../utils/GlobalStyled";

export const StyledTemplateContent = styled.span`
  display: block;
  position: relative;
  ${({ widthDevice }) => widthDevice > 2000 && ` bottom:1.5vmin`};
`;
export const StyledTemplate = styled.span`
  display: block;
  width: ${(props) => (props.$above ? `${props.width}` : "100%")};
  height: ${({ widthDevice }) => (widthDevice > 2000 ? `1vmin` : "8px")};
  border-radius: ${({ widthDevice }) => (widthDevice > 2000 ? `1vmin` : "5px")};
  position: absolute;
  background: ${(props) =>
    props.$above ? `${colors.primary}` : `${colors.tertiary}`};
  ${(props) => props.$above && `z-index:1;`}
  ${(props) => props.$above && animationRules(props.width)}
`;
export const StyledTitle = styled.span`
  display: block;
  font-size: ${({ widthDevice }) =>
    widthDevice < 1100 ? (widthDevice < 800 ? `1rem` : `1.2rem`) : `1.9vmin`};
  margin: 0 0
    ${({ widthDevice }) => (widthDevice > 2000 ? `2vmin 0.1vmin` : "1% 0.5%")};
`;
export const StyledUl = styled.ul`
  margin: 20px 0;
`;
