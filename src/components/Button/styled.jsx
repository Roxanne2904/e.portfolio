import styled from "styled-components";
import { colors, buttonAnimation } from "../../utils/GlobalStyled";

export const StyledButtonContainer = styled.button`
  width: 5%;
  height: 5%;
  border: solid 2px ${colors.primary};
  padding: 10px 0;
  background: ${colors.primary};
  border-radius: 100%;
  color: ${colors.primary};
  font-size: 0rem;
  z-index: -1;
  animation: ${buttonAnimation} 2s cubic-bezier(0.73, 0.71, 0.5, 0.99) 1.2s both;
`;
