import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ width }) => (width < 600 ? `3rem` : `2rem`)};
`;
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
export const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  width: ${({ width }) =>
    width < 1000
      ? width < 600
        ? width < 350
          ? `75%`
          : `65%`
        : `55%`
      : `30%`};
`;
export const StyledFigcaption = styled.figcaption`
  margin: 0.3rem 0.5rem;
`;
