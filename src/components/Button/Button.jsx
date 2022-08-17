import { StyledButton, StyledButtonHover, StyledLinkContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export default function Button({ title, titleSecondary }) {
  return (
    <StyledLinkContainer to={"/about"}>
      <StyledButtonHover>
        <FontAwesomeIcon icon={faDoorOpen} />
      </StyledButtonHover>
      <StyledButton>{`${title}`}</StyledButton>
    </StyledLinkContainer>
  );
}
