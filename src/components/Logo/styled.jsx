import styled from "styled-components";

export const StyledLogo = styled.a`
  ${(props) => props.bool === true && "display:flex; justify-content:center; "}
  cursor: pointer;
`;
