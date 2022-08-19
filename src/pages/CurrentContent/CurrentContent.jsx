import About from "../About/About";
import Skills from "../Skills/Skills";
import { StyledSectionContent } from "./styled";

export default function CurrentContent({ content }) {
  return (
    <StyledSectionContent id={content}>
      {content === "about" ? <About /> : content === "skills" ? <Skills /> : ""}
    </StyledSectionContent>
  );
}
