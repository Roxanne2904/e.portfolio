import { keyframes } from "styled-components";

export const colors = {
  primary: "#4ac0bf",
  primaryLessO: "#4ac0bf10",
  secondary: "#032628",
  secondaryLessO: "#03262899",
  secondaryDarker: "#021d1e",
  secondaryDarkerLessO: "#021d1e99",
  tertiary: "#005959",

  purple: "#6229C9",
  white: "#FFFFFF",
  dark: "#011616",
};

export const display = {
  flex: "flex",
  block: "block",
};
export const flexDirection = {
  column: "column",
};

export const fontSize = {
  main: "2.5rem",
  mainLessB: "1.5rem",
  mainBigger: "4rem",
  secondary: "0.85rem",
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
0%{transform: translateY(-200%);width:5%;height:5%;font-size:0rem;background:${colors.primary};border-radius:50%;}
50% {width:5%;height:5%;font-size:0rem;background:${colors.primary};border-radius:50%;}
70% {width:20%;font-size:0rem;border-radius:50%;}
80% {width:20%;border-radius:inherit;background:${colors.primary};}
100%{transform: translateY(0%);}
`;
export const pointerEventsAnimation = keyframes`
0%{pointer-events: none;}
100%{pointer-events: inherit;}
`;

// 0% {transform: translateY(-200%);width:5%;height:5%;font-size:0rem;background:${colors.primary};border-radius:50%;}
// 50% {width:5%;height:5%;font-size:0rem;background:${colors.primary};border-radius:50%;}
// 70% {width:20%;font-size:0rem;border-radius:50%;}
// 80% {width:20%;border-radius:inherit;background:${colors.primary};}
// 100% {transform: translateY(0%);width:5%;height:12%;border-radius:inherit;width:100%;background:transparent;font-size:${fontSize.main};cursor: pointer;z-index: 1;}

// 75% {width:75%;height:7.5%;}
// 80% {width:80%;height:10%;}
// 85% {width:85%;height:12.5%;}
// 90% {width:90%;height:13%;}
// 95% {width:95%; height:13%; background:${colors.primary};font-size:0.1rem;}
// 100% { width:100%;border-radius:inherit;font-size:${fontSize.button01}; background:transparent; height:13%}

// transform: translateY(-200%);

// transform: translateY(40px);
