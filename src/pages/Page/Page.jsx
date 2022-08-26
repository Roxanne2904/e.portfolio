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
import Button from "../../components/Button/Button";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page({ title, content }) {
  const [width, setWidth] = useState(window.innerWidth); //*useState

  useEffect(() => {
    const updateCurrentWidthAndHeight = () => {
      const currentWidth = window.innerWidth;

      setWidth(currentWidth);
    };
    window.addEventListener("resize", updateCurrentWidthAndHeight);

    return () =>
      window.removeEventListener("resize", updateCurrentWidthAndHeight);
  }, [width]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <Button type={"returnToTop"} width={width} />
        <div>
          {width < 800 && (
            <div>
              <HeaderLargeDevice content={content} width={width} />
            </div>
          )}
          <div style={{ position: "relative" }}>
            <StyledMainTitle width={width}>
              <StyledTitle width={width}>{title}</StyledTitle>
            </StyledMainTitle>
          </div>
        </div>
        <StyledMainContent width={width}>
          {width > 800 && (
            <StyledHeaderContent>
              <HeaderLargeDevice content={content} width={width} />
            </StyledHeaderContent>
          )}

          <CurrentContent content={content} width={width} />
        </StyledMainContent>
        <Footer content={content} width={width} />
      </main>
    </motion.div>
  );
}
