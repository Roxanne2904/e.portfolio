import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

export const StyledSectionContent = styled.section`
  position: relative;
  background: ${({ id }) =>
    id === "about" ? `${colors.primaryLessO}` : `${colors.white}`};
  ${({ width }) => width < 1200 && `justify-content: space-between;`}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// ${({ width, id, height }) =>
// height > 1000 && id === "about" && height > 2000 && `height:80vh`};
