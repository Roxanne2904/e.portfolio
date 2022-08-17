import styled from "styled-components";
import { colors, fontSize } from "../../utils/GlobalStyled";

export const StyledList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  width: 100%;
  height: 200px;
  background: ${colors.primaryLessO};
  border: ${colors.primary} 2px solid;
  ${(props) => props.noTopBorder === true && `border-top-style: none;`}
  cursor: pointer;
  font-size: ${fontSize.mainLessB};
`;
