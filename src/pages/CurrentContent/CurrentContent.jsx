import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { StyledSectionContent } from "./styled";

export default function CurrentContent({ content, width, height }) {
  return (
    <StyledSectionContent id={content} width={width} height={height}>
      {content === "about" ? (
        <About width={width} height={height} />
      ) : content === "skills" ? (
        <Skills width={width} height={height} />
      ) : (
        <Projects width={width} height={height} />
      )}
    </StyledSectionContent>
  );
}
