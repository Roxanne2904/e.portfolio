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

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page({ title, content }) {
  const [width, setWidth] = useState(window.innerWidth); //*useState
  const [heigth, setHeigth] = useState(window.innerHeight); //*useState

  useEffect(() => {
    const updateCurrentWidthAndHeight = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      setWidth(currentWidth);
      setHeigth(currentHeight);
    };
    window.addEventListener("resize", updateCurrentWidthAndHeight);

    return () =>
      window.removeEventListener("resize", updateCurrentWidthAndHeight);
  }, [width, heigth]);

  console.log(width);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <div style={{ position: "relative" }}>
          <StyledMainTitle>
            <StyledTitle>{title}</StyledTitle>
          </StyledMainTitle>
        </div>
        <StyledMainContent width={width}>
          <StyledHeaderContent>
            <HeaderLargeDevice content={content} width={width} />
          </StyledHeaderContent>

          <CurrentContent content={content} width={width} />
        </StyledMainContent>
        <Footer content={content} />
      </main>
    </motion.div>
  );
}
