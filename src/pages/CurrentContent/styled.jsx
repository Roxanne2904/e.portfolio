import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

export const StyledSectionContent = styled.section`
  position: relative;
  background: ${colors.white};
  ${({ width }) => width < 1200 && `justify-content: space-between;`}
  width: ${({ width }) => (width < 1200 ? "100%" : "65%")};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ width, id }) => width < 1200 && id === "about" && `height:100vh`};
`;
