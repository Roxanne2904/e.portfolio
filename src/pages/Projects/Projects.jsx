import Cards from "../../components/Cards/Cards";
import { StyledMainContent } from "./styled";
export default function Projects({ width }) {
  return (
    <StyledMainContent
      width={width}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Cards width={width} />
    </StyledMainContent>
  );
}
