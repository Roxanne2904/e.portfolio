import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { StyledSectionContent } from "./styled";

export default function CurrentContent({ content, width }) {
  return (
    <StyledSectionContent id={content} width={width}>
      {content === "about" ? (
        <About width={width} />
      ) : content === "skills" ? (
        <Skills />
      ) : (
        <Projects />
      )}
    </StyledSectionContent>
  );
}
