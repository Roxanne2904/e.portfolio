import Card from "../../components/Card/Card";
import { StyledMainContent, StyledWrapper } from "./styled";

export default function Projects({ width, height, content }) {
	return (
		<StyledWrapper
			width={width}
			initial={{ scaleY: 0, opacity: 0 }}
			animate={{ scaleY: 1, opacity: 1 }}
			exit={{ scaleY: 0, opacity: 0 }}
			transition={{ duration: 0.3, delay: 0.5 }}
		>
			<StyledMainContent width={width}>
				<Card width={width} height={height} content={content} />
			</StyledMainContent>
		</StyledWrapper>
	);
}
