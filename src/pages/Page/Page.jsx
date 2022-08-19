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
import Footer from "../../components/Footer/Footer";

export default function Page({ title, content }) {
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
            <HeaderLargeDevice content={content} />
          </StyledHeaderContent>

          <CurrentContent content={content} />
        </StyledMainContent>
        <Footer content={content} />
      </main>
    </div>
  );
}
