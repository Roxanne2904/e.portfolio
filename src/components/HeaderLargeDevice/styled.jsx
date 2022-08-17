import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StyledBlockList = styled.ul`
  ${(props) => props.logo === true && "position:absolute;"}
  ${(props) => props.logo === true && "top:0;right: 0;"}
  ${(props) => props.logo === true && "width: 30%;"}
  display: flex;
  flex-direction: ${(props) => (props.logo === true ? "row" : "column")};
  align-items: center;
  list-style-type: none;
`;
