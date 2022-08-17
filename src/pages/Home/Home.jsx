//*Assets
import logo from "../../assets/my_logo_namesoff.png";
//*Components
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
// //*Font-Awesome
// import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

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
      <main>
        <StyledMainContainer>
          <StyledContainer>
            <div
              style={{
                position: "relative",
                textAlign: "center",
                width: "25%",
              }}
            >
              <StyledLogosContainer>
                <Logo
                  name={"github"}
                  url={"https://github.com/Roxanne2904/"}
                  width="85%"
                  height="100%"
                  margin={"15% 15% 0 0"}
                  bool={false}
                />
                <Logo
                  name={"linkedin"}
                  url={"https://www.linkedin.com/in/roxanne-viette-15a365203/"}
                  width="85%"
                  height="100%"
                  margin={"15% 15% 0 0"}
                  bool={false}
                />
                <Logo
                  name={"instagram"}
                  url={"https://www.instagram.com/roxannevietteillustratrice/"}
                  width="85%"
                  height="100%"
                  margin={"15% 15% 0 0"}
                  bool={false}
                />
              </StyledLogosContainer>
              <StyledImg src={logo} alt="logo" className="logo" />

              <StyledMainTitle>
                <StyledStrongString>V</StyledStrongString>iette{" "}
                <StyledStrongString>R</StyledStrongString>oxanne
              </StyledMainTitle>
            </div>

            <StyledAboutContainer>
              <StyledSecondaryTitle>
                Développeuse d'application
                <StyledSubtitle>JavaScript React</StyledSubtitle>
              </StyledSecondaryTitle>
              <Button title={"Bienvenue... "} titleSecondary={"...Entrer"} />
            </StyledAboutContainer>
          </StyledContainer>
        </StyledMainContainer>
      </main>
    </div>
  );
}
