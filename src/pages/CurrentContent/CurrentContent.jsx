import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { StyledSectionContent } from "./styled";

export default function CurrentContent({ content, width, height }) {
	const myContent = {
		about: <About width={width} height={height} />,
		skills: <Skills width={width} height={height} />,
		projects: <Projects width={width} height={height} content={content} />,
		projectsInProgress: (
			<Projects width={width} height={height} content={content} />
		),
		challenges: <Projects width={width} height={height} content={content} />,
	};
	return (
		<StyledSectionContent id={content} width={width} height={height}>
			{myContent[content]}
		</StyledSectionContent>
	);
}
