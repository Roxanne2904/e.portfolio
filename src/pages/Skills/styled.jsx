import styled from "styled-components";

export const StyledBlockList = styled.ul`
  width: 100%;
  margin: 0 0 20% 0;
`;
export const StyledLi = styled.li`
  margin: 30px;
  padding: 25px;
  font-size: ${({ width }) => (width < 1100 ? `1.5rem` : ` 2.5vmin`)};
`;
