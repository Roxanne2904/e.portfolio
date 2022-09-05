import Cards from "../../components/Cards/Cards";
import { StyledMainContent } from "./styled";
export default function Projects({ width, height }) {
  return (
    <StyledMainContent
      width={width}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Cards width={width} height={height} />
    </StyledMainContent>
  );
}
