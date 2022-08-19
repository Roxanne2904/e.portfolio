import styled from "styled-components";
import { colors } from "../../utils/GlobalStyled";

const StyledTemplateContent = styled.span`
  display: block;
  position: relative;
`;
const StyledTemplate = styled.span`
  display: block;
  width: ${(props) => (props.$above ? "75%" : "100%")};
  height: 8px;
  border-radius: 5px;
  position: absolute;
  background: ${(props) =>
    props.$above ? `${colors.primary}` : `${colors.tertiary}`};
  ${(props) => props.$above && `z-index:1;`}
`;
const StyledTitle = styled.span`
  display: block;
  font-size: 2.5vmin;
  margin: 0 0 1% 0.5%;
`;
const StyledBlockList = styled.ul`
  width: 100%;
  list-style-type: none;
`;

export default function Skills() {
  return (
    <div style={{ width: "70%" }}>
      <div>
        <StyledBlockList>
          <li>
            <StyledTitle>javascript</StyledTitle>
            <StyledTemplateContent>
              <StyledTemplate $above></StyledTemplate>
              <StyledTemplate></StyledTemplate>
            </StyledTemplateContent>
          </li>
        </StyledBlockList>
      </div>
    </div>
  );
}
