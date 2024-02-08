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
	tertiaryTest: "#00595999",
	tertiaryLessO: "#00595950",
	fourth: "#002528",

	purple: "#6229C9",
	white: "#FFFFFF",
	dark: "#011616",
};

export const cornerPattern = `
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
 `;
export const absolutePattern = `
  position: absolute;
 ${cornerPattern}
 `;
export const isNotHover = css`
	${absolutePattern}
	z-index: 1;
`;
export const device = {
	small: 600,
	smallXL: 720,
	medium: 800,
	large: 1200,
	XXlarge: 2000,
};

export const display = {
	flex: "flex",
	block: "block",
	rowReverse: "row-reverse",
	spaceBetween: "space-between",
	center: "center",
};

export const position = {
	relative: "relative",
	fixed: "fixed",
	absolute: "absolute",
};

export const status = {
	none: "none",
};

export const opacity = {
	one: "1",
	zero: "0",
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

export const flexWrap = `
flex-wrap: wrap;
`;
export const WidthHeightPattern = `
width: 10rem;
height: 10rem;
`;
export const fontBold = `
font-weight: bold;
`;
export const paddingPattern = `
padding: 10px 0;
`;
export const cursorPointer = `
cursor: pointer;
`;
export const borderTransparentSolid = `
border: 1px transparent solid;
`;
export const rightAndLeftNone = `border-right: none;
border-left: none;`;

export const flexAlignAndJustifyCenter = `
display: flex;
align-items: center;
justify-content: center;
`;
export const flexCenter = `
display: flex;
justify-content: center;
`;

export const flexAlignCenter = `
display: flex;
align-items: center;
`;

export const flexColumn = `
display: flex;
flex-direction: column;
`;

export const cardPattern = `
${flexAlignCenter}
position: ${position.relative};
flex-direction: ${flexDirection.column};
justify-content: ${display.spaceBetween};
border-radius: 5px;
overflow: hidden;
box-shadow: 0 0 1rem ${colors.secondaryLessO};
width: -webkit-fill-available;
width: -moz-available; 
`;
export const fontSizeTitleCard = ({ height, width }) => css`
	font-size: ${({ height, width }) =>
		width <= 1800 ? `1.3rem` : width > 2000 ? `1.35rem` : `1.2rem`};
`;

//*animations
export const afterLineAnimation = keyframes`
0% {left:100%;}
100% {left:0;}
`;

export const beforeLineAnimation = keyframes`
0% {width:0;}
100% {width:100%;}
`;

export const buttonBackToTop = keyframes`
0%{opacity:0;}
100%{opacity: 1;}
`;
export const buttonAnimation = keyframes`
0%{transform:scaleX(0);border-radius:50px;background-color:${colors.primary};}
80%{border-radius:30px; background-color:${colors.primary};}
100%{transform:scaleX(1);border-radius:0%;background-color:transparent;}
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
