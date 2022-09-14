//*Assets
// import logo from "../../assets/my_logo_namesoff.png";
//*Components
import Button from "../../components/Button/Button";
// import Logo from "../../components/Logo/Logo";
import List from "../../components/List/List";
// //*Font-Awesome
// import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
//*utils
import { listLogo } from "../../utils/lists/lists";
import { useState, useEffect } from "react";
//*Styled
import {
  // StyledImg,
  StyledMainContainer,
  StyledContainer,
  StyledSubtitle,
  StyledMainTitle,
  StyledStrongString,
  StyledSecondaryTitle,
  StyledAboutContainer,
  StyledLogosContainer,
  StyledCurrentContent,
} from "./styled";

import { motion } from "framer-motion";
import MainLogo from "../../components/MainLogo/MainLogo";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth); //*useState
  const [height, setHeight] = useState(window.innerHeight); //*useState

  useEffect(() => {
    const updateCurrentWidthAndHeight = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      setWidth(currentWidth);
      setHeight(currentHeight);
    };
    window.addEventListener("resize", updateCurrentWidthAndHeight);

    return () =>
      window.removeEventListener("resize", updateCurrentWidthAndHeight);
  }, [width, height]);

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
            <StyledCurrentContent width={width}>
              <StyledLogosContainer>
                <List arrayData={listLogo} location={"home"} />
              </StyledLogosContainer>
              {/* <StyledImg src={logo} alt="logo" className="logo" /> */}
              <div>
                <MainLogo complete={"true"} />
              </div>
              <StyledMainTitle width={width} height={height}>
                <StyledStrongString width={width} height={height}>
                  V
                </StyledStrongString>
                iette{" "}
                <StyledStrongString width={width} height={height}>
                  R
                </StyledStrongString>
                oxanne
              </StyledMainTitle>
            </StyledCurrentContent>

            <StyledAboutContainer width={width}>
              <StyledSecondaryTitle width={width} height={height}>
                Développeuse d'application
                <StyledSubtitle width={width} height={height}>
                  JavaScript React
                </StyledSubtitle>
              </StyledSecondaryTitle>
              <Button title={"Bienvenue... "} width={width} height={height} />
            </StyledAboutContainer>
          </StyledContainer>
        </StyledMainContainer>
      </main>
    </motion.div>
  );
}
