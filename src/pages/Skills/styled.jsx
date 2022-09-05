import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

export const StyledBlockList = styled.ul`
  width: 100%;
  margin: 0 0 20% 0;
`;
export const StyledLi = styled.li`
  margin: 30px;
  padding: 25px;
  font-size: ${({ width, height }) =>
    width < 1100 ? `1.5rem` : height < 890 ? `1.6rem` : ` 2.5vmin`};
`;
export const StyledSectionTitle = styled.div`
  font-weight: bold;
  color: ${colors.secondary};
`;
