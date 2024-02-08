//*styled
import styled from "styled-components";
//*react-router
import { Link } from "react-router-dom";
//*utils
import {
	colors,
	device,
	rightAndLeftNone,
	borderTransparentSolid,
	fontBold,
	cursorPointer,
	status,
	display,
} from "../../utils/GlobalStyled";
//*framer-Motion
import { motion } from "framer-motion";

export const StyledList = styled.div`
	${cursorPointer}
	${borderTransparentSolid}
  color: ${colors.primaryMoreSaturated};
	padding: ${({ width }) =>
		width < device.smallXL
			? width <= 315
				? `0.5rem 5rem`
				: `1.3rem 1.5rem`
			: `2rem 2rem`};
	font-size: ${({ width, height }) =>
		width < device.large
			? `1.1rem`
			: height < 700
			? `1rem`
			: width > 2000
			? `1.5rem`
			: `1.2rem`};
	&:hover {
		color: ${colors.white};
		border: ${colors.primary} solid 1px;
		${rightAndLeftNone}
		transition: all 0.5s;
	}
	&:not(:hover) {
		color: ${colors.primaryMoreSaturated};
		${borderTransparentSolid}
		${rightAndLeftNone}
    transition: all 1.2s;
	}
`;
export const StyledTitle = styled.span`
	color: ${colors.tertiary};
	margin: 0 10px 0 0;
`;
export const StyledLinkA = styled(motion.a)`
	${fontBold}
	text-decoration: ${status.none};
	color: ${colors.secondaryDarker};
	${(props) =>
		props.$nav === true && `color:${colors.primary};font-weight: inherit;`}
`;
export const StyledBtn = styled(motion.div)`
	${fontBold}
	text-decoration: ${status.none};
	color: ${colors.secondaryDarker};
	${(props) =>
		props.$nav === true && `color:${colors.primary};font-weight: inherit;`}
	background-color: transparent;
	border: none;
`;
export const StyledLink = styled(Link)`
	display: ${display.block};
	${({ width }) => width < 415 && `width:100%`};
	text-decoration: ${status.none};
	&:hover {
		color: ${colors.white};
		transition: all 0.5s;
	}
	&:not(:hover) {
		color: ${colors.primary};
		transition: all 0.5s;
	}
	${(props) => props.$nav && `color:${colors.primary};`}
`;

export const StyledBasicSpan = styled.span`
	${fontBold}
	color: ${colors.secondaryDarker};
`;
