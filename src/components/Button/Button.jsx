import {
  StyledHomeButton,
  StyledButtonHover,
  StyledLinkContainer,
  StyledButton,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

export default function Button({ title, type, width }) {
  const [display, setDisplay] = useState("none");
  const [scrollY, setScrollY] = useState(window.innerHeight); //*useState

  useEffect(() => {
    const updateCurrentWidthAndHeight = () => {
      const scrollYposition = window.scrollY;

      setScrollY(scrollYposition);
      if (scrollYposition === 0) {
        display !== "none" && setDisplay("none");
      } else {
        display !== "block" && setDisplay("block");
      }
    };
    window.addEventListener("scroll", updateCurrentWidthAndHeight);

    return () =>
      window.removeEventListener("scroll", updateCurrentWidthAndHeight);
  }, [scrollY, display]);

  switch (type) {
    case "returnToTop":
      return (
        <StyledButton
          display={display}
          onClick={() => window.scrollTo(0, 0)}
          width={width}
          aria-label={"aller en haut de la page"}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </StyledButton>
      );

    default:
      return (
        <StyledLinkContainer to={"/about"}>
          <StyledButtonHover width={width} aria-label={"le logo d'une porte"}>
            <FontAwesomeIcon icon={faDoorOpen} />
          </StyledButtonHover>
          <StyledHomeButton
            width={width}
            aria-label={`${title}`}
          >{`${title}`}</StyledHomeButton>
        </StyledLinkContainer>
      );
  }
}
