import styled from "styled-components";

import Logo from "../../components/Logo/Logo";
import { listLogo } from "../../utils/lists/lists";

import { colors } from "../../utils/GlobalStyled";

const StyledMainContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5vmin;
  border-radius: 5px;
  box-shadow: 0 0 1rem ${colors.secondaryLessO};
  overflow: hidden;
`;
const StyledProjectsParagraph = styled.p`
  text-align: justify;
  padding: 2vmin;
  font-size: 1.5vmin;
`;
const StyledUl = styled.ul`
  margin: 1vmin 0;
  font-weight: bold;
  padding: 5% 5%;
`;
const StyledListContent = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 97%;
    right: 0;
    left: 0;
    background: linear-gradient(
      0.25turn,
      transparent,
      ${colors.tertiary},
      transparent
    );
  }
`;
const StyledLogoContent = styled.div`
  position: absolute;
  right: 2vmin;
  top: 2vmin;
  text-align: end;
`;
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  ${(props) =>
    props.$app &&
    `background:${colors.tertiary}; color:${colors.white};padding:0.8vmin;`}
`;
const StyledSecondaryTitle = styled.h2`
  background: ${colors.tertiary};
  color: ${colors.white};
  padding: 0.8vmin 0;
  width: 100%;
  text-align: center;
`;

export default function Projects() {
  const logoGitHub = listLogo[0];
  return (
    <div>
      <StyledMainContent>
        <StyledSecondaryTitle>Kasa</StyledSecondaryTitle>
        <div>
          <StyledProjectsParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </StyledProjectsParagraph>
          <div>
            <StyledListContent>
              <StyledUl>
                <li>React</li>
                <li>Redux</li>
                <li>java</li>
                <li>test</li>
              </StyledUl>
              <StyledLogoContent>
                <Logo
                  name={logoGitHub.name}
                  url={logoGitHub.url}
                  width="4vmin"
                  height="4vmin"
                  margin="inherit"
                  bool={false}
                  color={colors.tertiary}
                />
              </StyledLogoContent>
            </StyledListContent>
            <div>
              <StyledLink $app href={"l'appli"} alt="l'applli">
                VoirL'application
              </StyledLink>
            </div>
          </div>
        </div>
      </StyledMainContent>
    </div>
  );
}
