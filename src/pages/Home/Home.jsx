import logo from "../../assets/my_logo_namesoff.png";
import Button from "../../components/Button/Button";
import {
  StyledImg,
  StyledMainContainer,
  StyledContainer,
  StyledSubtitle,
  StyledMainTitle,
  StyledStrongString,
  StyledSecondaryTitle,
} from "./styled";

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <StyledMainContainer>
          <StyledMainTitle>
            <StyledStrongString>V</StyledStrongString>iette{" "}
            <StyledStrongString>R</StyledStrongString>oxanne
          </StyledMainTitle>
          <StyledContainer>
            <StyledImg src={logo} alt="logo" className="logo" />

            <div
              style={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StyledSecondaryTitle>
                Développeuse d'application
                <StyledSubtitle>JavaScript React</StyledSubtitle>
              </StyledSecondaryTitle>
              <Button title="A Propos" />
            </div>
          </StyledContainer>
        </StyledMainContainer>
      </main>
    </div>
  );
}
