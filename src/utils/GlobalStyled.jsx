import { keyframes } from "styled-components";

export const colors = {
  primary: "#4ac0bf",
  secondary: "#032628",
  white: "#FFFFFF",
};

export const display = {
  flex: "flex",
  block: "block",
};
export const flexDirection = {
  column: "column",
};

export const fontSize = {
  main: "4rem",
  button01: "1.5rem",
};

export const afterLineAnimation = keyframes`
0% {left:100vh;}
100% {left:0;}
`;
export const beforeLineAnimation = keyframes`
0% {width:0;}
100% {width:100%;}
`;
export const buttonAnimation = keyframes`
0% {transform: translateY(-200%);}
70% {width:5%;height:5%;}
75% {width:75%;height:10%;}
80% {width:80%;height:10%;}
85% {width:85%;height:10%;}
90% {width:90%;height:10%;}
95% {width:95%;height:10%; background:${colors.primary};font-size:0.1rem;}
100% {transform: translateY(40px); width:100%;border-radius:inherit;font-size:${fontSize.button01}; background:transparent; height:inherit;}

`;
// 90% {transform: translateY(120%);}
