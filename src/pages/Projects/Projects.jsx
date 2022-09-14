import Cards from "../../components/Cards/Cards";
import { StyledMainContent, StyledWrapper } from "./styled";
export default function Projects({ width, height }) {
  return (
    <StyledWrapper
      width={width}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <StyledMainContent width={width}>
        <Cards width={width} height={height} />
      </StyledMainContent>
    </StyledWrapper>
  );
}
