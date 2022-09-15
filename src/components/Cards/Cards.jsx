//*components
import Logo from "../Logo/Logo";
//*utils
import { colors } from "../../utils/GlobalStyled";
import { listLogo } from "../../utils/lists/lists";
//*styled
import {
  StyledMainContent,
  StyledSecondaryTitle,
  StyledTitleTxt,
  StyledSecondarySmallDevice,
  StyledSecondaryTitleCopy,
  StyledProjectsParagraph,
  StyledListContent,
  StyledUlBlock,
  StyledUl,
  StyledTechLi,
  StyledFigma,
  StyledLogoContent,
  StyledLinkAppContent,
  StyledLink,
  StyledModelAndGitHubLinkContent,
} from "./styled";

export default function Cards({ width, height }) {
  const projectsList = listLogo[0].projects;
  const logoGitHub = listLogo[0];
  let id = 0;

  return projectsList.map((elt) => {
    return (
      <StyledMainContent
        data-id={`${elt.id}`}
        key={`${elt.id}-${elt.name}`}
        width={width}
        height={height}
      >
        {width >= 1800 && width < 3000 ? (
          height < 800 || height > 1200 ? (
            <StyledSecondarySmallDevice width={width}>
              {elt.display}
            </StyledSecondarySmallDevice>
          ) : (
            <div>
              <StyledSecondaryTitle height={height} width={width}>
                <StyledTitleTxt width={width} height={height}>
                  {elt.display}
                </StyledTitleTxt>
              </StyledSecondaryTitle>
              <StyledSecondaryTitleCopy>{elt.display}</StyledSecondaryTitleCopy>
            </div>
          )
        ) : (
          <StyledSecondarySmallDevice width={width}>
            {elt.display}
          </StyledSecondarySmallDevice>
        )}

        <StyledProjectsParagraph width={width} height={height}>
          {typeof elt.description !== "string" ? (
            <span>
              {elt.description[0]}
              <br />
              {elt.name === "sportSee" ? (
                <span style={{ color: "red" }}>{elt.description[1]}</span>
              ) : (
                elt.description[1]
              )}
              <br />
              {elt.description[2]}
              <br />
              {elt.description[3]}
              <br />
            </span>
          ) : (
            elt.description
          )}
        </StyledProjectsParagraph>

        <div style={{ width: "100%" }}>
          <StyledListContent width={width}>
            <StyledUlBlock width={width}>
              <StyledUl width={width}>
                {elt.tools.map((elt) => {
                  id++;
                  return (
                    <StyledTechLi
                      width={width}
                      height={height}
                      key={`${elt}-${id}`}
                    >{`${elt}`}</StyledTechLi>
                  );
                })}
              </StyledUl>
            </StyledUlBlock>
            <StyledModelAndGitHubLinkContent>
              <StyledFigma width={width} height={height}>
                {elt.maquette === undefined ? (
                  elt.library === undefined ? (
                    ""
                  ) : (
                    <a
                      href={`${elt.library}`}
                      alt={"voir la librairie"}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      {`Plugin react-calendar`}
                    </a>
                  )
                ) : (
                  <a
                    href={`${elt.maquette}`}
                    alt={"voir la maquette"}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    {`Maquette Figma`}
                  </a>
                )}
              </StyledFigma>
              <StyledLogoContent width={width}>
                <Logo
                  name={logoGitHub.name}
                  url={elt.urlP}
                  width={
                    width < 1000
                      ? width < 450
                        ? `2.3rem`
                        : `3rem`
                      : height < 1200
                      ? `20%`
                      : `4vmin`
                  }
                  height={
                    width < 1000
                      ? width < 450
                        ? `2.3rem`
                        : `3rem`
                      : height < 890
                      ? `20%`
                      : height < 1200
                      ? `20%`
                      : `4vmin`
                  }
                  margin="inherit"
                  bool={false}
                  color={colors.tertiary}
                />
              </StyledLogoContent>
            </StyledModelAndGitHubLinkContent>
          </StyledListContent>
          <StyledLinkAppContent>
            <StyledLink
              width={width}
              height={height}
              $app
              href={`${elt.urlApp}`}
              alt="l'appli"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Voir l'application
            </StyledLink>
          </StyledLinkAppContent>
        </div>
      </StyledMainContent>
    );
  });
}
