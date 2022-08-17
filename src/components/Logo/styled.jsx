import styled from "styled-components";

export const StyledLogo = styled.a`
  ${(props) =>
    props.logo === true &&
    "display:flex; justify-content:center; margin:20px 10px 0 0;"}
  cursor: pointer;
`;
