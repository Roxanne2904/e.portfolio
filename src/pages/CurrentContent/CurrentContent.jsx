import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { StyledSectionContent } from "./styled";

export default function CurrentContent({ content }) {
  return (
    <StyledSectionContent id={content}>
      {content === "about" ? (
        <About />
      ) : content === "skills" ? (
        <Skills />
      ) : (
        <Projects />
      )}
    </StyledSectionContent>
  );
}
