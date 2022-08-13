//*Assets
import logo from "../../assets/my_logo_namesoff.png";
//*Components
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
//*Font-Awesome
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

//*Styled
import {
  StyledImg,
  StyledMainContainer,
  StyledContainer,
  StyledSubtitle,
  StyledMainTitle,
  StyledStrongString,
  StyledSecondaryTitle,
  StyledAboutContainer,
  StyledLogosContainer,
} from "./styled";

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <StyledMainContainer>
          <div style={{ display: "flex", position: "relative" }}>
            <StyledLogosContainer>
              <Logo logo={faDoorOpen} />
            </StyledLogosContainer>
            <StyledContainer>
              <StyledImg src={logo} alt="logo" className="logo" />

              <StyledMainTitle>
                <StyledStrongString>V</StyledStrongString>iette{" "}
                <StyledStrongString>R</StyledStrongString>oxanne
              </StyledMainTitle>

              <StyledAboutContainer>
                <StyledSecondaryTitle>
                  Développeuse d'application
                  <StyledSubtitle>JavaScript React</StyledSubtitle>
                </StyledSecondaryTitle>
                <Button title={"Bienvenue... "} titleSecondary={"...Entrer"} />
              </StyledAboutContainer>
            </StyledContainer>
          </div>
        </StyledMainContainer>
      </main>
    </div>
  );
}
