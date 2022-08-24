//*Assets
import logo from "../../assets/my_logo_namesoff.png";
//*Components
import Button from "../../components/Button/Button";
// import Logo from "../../components/Logo/Logo";
import List from "../../components/List/List";
// //*Font-Awesome
// import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
//*utils
import { listLogo } from "../../utils/lists/lists";

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

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
                <List arrayData={listLogo} location={"home"} />
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
              <Button title={"Bienvenue... "} />
            </StyledAboutContainer>
          </StyledContainer>
        </StyledMainContainer>
      </main>
    </motion.div>
  );
}
