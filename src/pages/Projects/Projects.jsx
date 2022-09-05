import Cards from "../../components/Cards/Cards";
import { StyledMainContent } from "./styled";
export default function Projects({ width, height }) {
  return (
    <StyledMainContent
      width={width}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Cards width={width} height={height} />
    </StyledMainContent>
  );
}
