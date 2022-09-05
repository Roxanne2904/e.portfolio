import { motion } from "framer-motion";
import { StyledLinkA, StyledLink, StyledList } from "./styled";

export const liDomContentForNavLink = (elt, width, height, item) => {
  return elt.name === "toContact" ? (
    <motion.li key={`${elt.id}-${elt.name}`} variants={item}>
      <StyledLinkA $nav href={elt.url}>
        <StyledList width={width} height={height} border={elt.borderLeft}>
          {`${elt.content}`}
        </StyledList>
      </StyledLinkA>
    </motion.li>
  ) : (
    <motion.li key={`${elt.id}-${elt.name}`} variants={item}>
      <StyledLink $nav to={elt.url}>
        <StyledList width={width} height={height} border={elt.borderLeft}>
          {`${elt.content}`}
        </StyledList>
      </StyledLink>
    </motion.li>
  );
};
