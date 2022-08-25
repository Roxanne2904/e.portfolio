import {
  StyledHomeButton,
  StyledButtonHover,
  StyledLinkContainer,
  StyledButton,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Button({ title, type, width }) {
  switch (type) {
    case "returnToTop":
      return (
        <StyledButton>
          <FontAwesomeIcon icon={faArrowUp} />
        </StyledButton>
      );

    default:
      return (
        <StyledLinkContainer to={"/about"}>
          <StyledButtonHover width={width}>
            <FontAwesomeIcon icon={faDoorOpen} />
          </StyledButtonHover>
          <StyledHomeButton width={width}>{`${title}`}</StyledHomeButton>
        </StyledLinkContainer>
      );
  }
}
