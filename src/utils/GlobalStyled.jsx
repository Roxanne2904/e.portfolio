import { keyframes, css } from "styled-components";

export const colors = {
  primary: "#4ac0bf",
  primaryMoreSaturated: "#5DD3D2",
  primaryLessO: "#4ac0bf09",
  secondary: "#032628",
  secondaryLessO: "#03262899",
  secondaryDarker: "#021d1e",
  secondaryDarkerLessO: "#021d1e99",
  tertiary: "#005959",
  tertiaryLessO: "#00595950",
  fourth: "#002528",

  purple: "#6229C9",
  white: "#FFFFFF",
  dark: "#011616",
};

export const isNotHover = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const device = {
  small: 600,
  smallXL: 720,
  medium: 800,
  large: 1200,
};

export const display = {
  flex: "flex",
  block: "block",
  rowReverse: "row-reverse",
  spaceBetween: "space-between",
  center: "center",
};

export const fontBold = `
font-weight: bold;
`;

export const borderTransparentSolid = `
border: 1px transparent solid;
`;
export const rightAndLeftNone = `border-right: none;
border-left: none;`;

export const flexCenter = `display: flex;
justify-content: center;`;

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
0% {left:100%;}
100% {left:0;}
`;

export const beforeLineAnimation = keyframes`
0% {width:0;}
100% {width:100%;}
`;
// export const afterLineAnimationPage = keyframes`
// 0% {top:0;}
// 100% {top:94%;}
// `;

// export const beforeLineAnimationPage = keyframes`
// 0% {bottom:0;}
// 100% {bottom:94%;}
// `;
export const buttonBackToTop = keyframes`
0%{opacity:0;}
100%{opacity: 1;}
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
export const opacityAnimation = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

const animationProgressBar = (props) => keyframes`
0%{width:0%;}
100%{width:${props};}
`;

export const animationRules = (props) =>
  css`
    animation: ${animationProgressBar(props)} 1.2s 1.3s both;
  `;
