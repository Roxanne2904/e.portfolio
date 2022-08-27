import styled, { css } from "styled-components";
import Logo from "../Logo/Logo";
import { colors } from "../../utils/GlobalStyled";
import { listLogo } from "../../utils/lists/lists";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
//*

const isNotHover = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

// const animationHover = keyframes`
// 0%{color: ${colors.white};transform: translateY(0%);}
// 35%{color: ${colors.primary};transform: translateY(-94%);}
// 100%{z-index:-1;}

// `;
// const animationTest = css`
//   animation: ${animationHover} 1.5s both;
// `;
//*
// export const StyledMainLi = styled.li`
//   width: 35%;
//   height: 50vmin;
// `;
export const StyledMainContent = styled.li`
  position: relative;
  width: ${({ width }) => (width < 900 ? `100%` : `35%`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: ${({ width }) => (width < 900 ? `50px 0px` : `1vmin 1vmin`)};
  border-radius: 5px;
  box-shadow: 0 0 1rem ${colors.secondaryLessO};
  overflow: hidden;
  height: ${({ width }) => (width < 900 ? `inherit` : ` 50vmin`)};
`;

export const StyledSecondaryTitle = styled.h2`
  display: flex;
  font-size: 2.2vmin;
  justify-content: center;
  align-items: center;
  background: ${colors.tertiary};
  ${isNotHover}
  ${StyledMainContent}:hover & {
    transform: translateY(-91%);
    font-size: 2vmin;
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 2.2vmin;
    transition: all 1s;
  }
`;
export const StyledSecondarySmallDevice = styled.h2`
  opacity: 1;
  padding: 10px 0;
  color: ${colors.white};
  background: ${colors.tertiary};
  width: 100%;
  text-align: center;
  ${({ width }) => width < 450 && `font-size:1.2rem;`}
`;
export const StyledSecondaryTitleCopy = styled.div`
  opacity: 0;
  padding-bottom: 15px;
`;
export const StyledTitleTxt = styled.span`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  bottom: 35%;
  border: solid ${({ width }) => (width > 2000 ? `0.2vmin` : `1.5px`)} white;
  box-shadow: 0 0 ${({ width }) => (width > 2000 ? `2vmin` : `1rem`)}
    ${colors.secondaryDarker};
  width: 15vmin;
  height: 15vmin;
  border-radius: 50%;
  color: ${colors.white};
  ${StyledMainContent}:hover & {
    bottom: 1.1%;
    width: 100%;
    height: 6%;
    border-radius: 0%;
    transition: all 1s;
  }
  ${StyledMainContent}:not(:hover) & {
    bottom: 35%;
    width: 15vmin;
    height: 15vmin;
    border-radius: 50%;
    transition: all 1s;
  }
`;

export const StyledProjectsParagraph = styled.p`
  text-align: justify;
  padding: ${({ width }) => (width < 900 ? `4vmin` : `1vmin 2vmin`)};
  font-size: ${({ width }) =>
    width < 900 ? (width < 900 ? `0.8rem` : `1rem`) : ` 1.4vmin`};
`;
export const StyledUlBlock = styled.div`
  display: ${({ width }) => (width < 900 ? `inherit` : `flex`)};
  flex-wrap: wrap;
  max-height: ${({ width }) => (width < 900 ? `inherit` : ` 10vmin`)};
  width: ${({ width }) => (width < 900 ? `50%` : `70%`)};
  margin: 1vmin 0;
  font-weight: bold;
  padding: ${({ width }) => (width < 900 ? `1% 5%` : `2% 5%`)};
  font-size: 1.5vmin;
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: ${({ width }) => (width < 900 ? `initial` : ` 100%`)};
`;
export const StyledListContent = styled.div`
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
export const StyledLogoContent = styled.div`
  position: absolute;
  right: 2vmin;
  top: 2vmin;
  text-align: end;
  &:hover {
    color: ${colors.primary};
  }
`;
export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${({ width }) => (width < 900 ? `1rem` : `1.5vmin`)};
  ${(props) =>
    props.$app &&
    `background:${colors.tertiary}; color:${colors.white};padding: ${
      props.width < 900 ? `0.7rem` : `0.8vmin`
    };`}
  &:hover {
    background: ${colors.secondaryDarker};
    color: ${colors.primary};
    transition: all 500ms;
  }
  &:not(:hover) {
    background: ${colors.tertiary};
    color: ${colors.white};
    transition: all 500ms;
  }
`;
export const StyledFigma = styled.div`
  font-size: ${({ width }) =>
    width < 900 ? (width < 450 ? `0.8rem` : `1rem`) : ` 1.7vmin`};
  display: block;
  margin: 4% 5%;
  text-decoration: none;
  a {
    color: ${colors.tertiary};
    font-weight: bold;
    border-bottom: solid 2px transparent;
    &:hover {
      color: ${colors.purple};
      border-bottom: solid 2px ${colors.purple};
      transition: all 500ms;
    }
    &:not(:hover) {
      color: ${colors.tertiary};
      border-bottom: solid 2px transparent;
      transition: all 500ms;
    }
  }
`;
export const StyledTechLi = styled.li`
  color: ${colors.white};
  background: ${colors.tertiary};
  padding: ${({ width }) => (width < 900 ? `0.2rem 0.5rem` : `1% 4% 1.5%`)};
  border-radius: 10px;
  margin: ${({ width }) => (width < 900 ? `1% 1% 1% 0` : `1%`)};
  font-size: ${({ width }) => (width < 900 ? `0.7rem` : `1.25vmin`)};
`;
export const StyledTagsTitle = styled.span`
  font-size: ${({ width }) => (width < 900 ? `1rem` : ` 1.7vmin`)};
  margin: 0 0 0.2vmin 0.5vmin;
`;

export default function Cards({ width }) {
  const projectsList = listLogo[0].projects;
  const logoGitHub = listLogo[0];
  let id = 0;

  return projectsList.map((elt) => {
    return (
      <StyledMainContent
        data-id={`${elt.id}`}
        key={`${elt.id}-${elt.name}`}
        width={width}
      >
        {width > 1000 ? (
          <StyledSecondaryTitle>
            <StyledTitleTxt width={width}>{elt.display}</StyledTitleTxt>
          </StyledSecondaryTitle>
        ) : (
          <StyledSecondarySmallDevice width={width}>
            {elt.display}
          </StyledSecondarySmallDevice>
        )}
        {width > 1000 && (
          <StyledSecondaryTitleCopy>{elt.display}</StyledSecondaryTitleCopy>
        )}

        <StyledProjectsParagraph width={width}>
          {typeof elt.description !== "string" ? (
            <span>
              {elt.description[0]}
              <br />
              {elt.description[1]}
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
          <StyledListContent>
            <StyledUlBlock width={width}>
              <StyledTagsTitle width={width}>Outils de tech:</StyledTagsTitle>
              <StyledUl width={width}>
                {elt.tools.map((elt) => {
                  id++;
                  return (
                    <StyledTechLi
                      width={width}
                      key={`${elt}-${id}`}
                    >{`${elt}`}</StyledTechLi>
                  );
                })}
              </StyledUl>
            </StyledUlBlock>
            <StyledFigma width={width}>
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
                    {` ->Lien gitHub de mon plugin<-`}
                  </a>
                )
              ) : (
                <a
                  href={`${elt.maquette}`}
                  alt={"voir la maquette"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  {`->Lien Figma<-`}
                </a>
              )}
            </StyledFigma>
            <StyledLogoContent>
              <Logo
                name={logoGitHub.name}
                url={elt.urlP}
                width={
                  width < 900 ? (width < 450 ? `2.3rem` : `7vmin`) : `4vmin`
                }
                height={
                  width < 900 ? (width < 450 ? `2.3rem` : `7vmin`) : `4vmin`
                }
                margin="inherit"
                bool={false}
                color={colors.tertiary}
              />
            </StyledLogoContent>
          </StyledListContent>
          <div>
            <StyledLink
              width={width}
              $app
              href={`${elt.urlApp}`}
              alt="l'appli"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Voir L'application
            </StyledLink>
          </div>
        </div>
      </StyledMainContent>
    );
  });
}
