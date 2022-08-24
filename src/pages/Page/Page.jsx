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

export default function Page({ title, content }) {
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
        <StyledMainContent>
          <StyledHeaderContent>
            <HeaderLargeDevice content={content} />
          </StyledHeaderContent>

          <CurrentContent content={content} />
        </StyledMainContent>
        <Footer content={content} />
      </main>
    </motion.div>
  );
}
