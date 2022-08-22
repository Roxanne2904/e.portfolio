import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

export const StyledTemplateContent = styled.span`
  display: block;
  position: relative;
`;
export const StyledTemplate = styled.span`
  display: block;
  width: ${(props) => (props.$above ? `${props.width}` : "100%")};
  height: 8px;
  border-radius: 5px;
  position: absolute;
  background: ${(props) =>
    props.$above ? `${colors.primary}` : `${colors.tertiary}`};
  ${(props) => props.$above && `z-index:1;`}
`;
export const StyledTitle = styled.span`
  display: block;
  font-size: 1.9vmin;
  margin: 0 0 1% 0.5%;
`;
export const StyledUl = styled.ul`
  margin: 20px 0;
`;