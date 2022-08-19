import {
  StyledHomeButton,
  StyledButtonHover,
  StyledLinkContainer,
  StyledButton,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Button({ title, type }) {
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
          <StyledButtonHover>
            <FontAwesomeIcon icon={faDoorOpen} />
          </StyledButtonHover>
          <StyledHomeButton>{`${title}`}</StyledHomeButton>
        </StyledLinkContainer>
      );
  }
}
