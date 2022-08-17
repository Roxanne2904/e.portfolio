//*Styled
import {
  StyledMainContent,
  StyledHeaderContent,
  StyledMainTitle,
  StyledTitle,
} from "./styled";

//*components
import HeaderLargeDevice from "../../components/HeaderLargeDevice/HeaderLargeDevice";
import CurrentContent from "../CurrentContent/CurrentContent";

export default function Page({ title }) {
  return (
    <div>
      <main>
        <div style={{ position: "relative" }}>
          <StyledMainTitle>
            <StyledTitle>{title}</StyledTitle>
          </StyledMainTitle>
        </div>
        <StyledMainContent>
          <StyledHeaderContent>
            <HeaderLargeDevice />
          </StyledHeaderContent>

          <CurrentContent />
        </StyledMainContent>
      </main>
    </div>
  );
}
