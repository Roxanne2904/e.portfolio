// import { Link } from "react-router-dom";
import { StyledList, StyledTitle, StyledLinkA, StyledLink } from "./styled";
import Logo from "../Logo/Logo";
import { colors } from "../../utils/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function List({ arrayData, location, content }) {
  const [currentArrayData, setCurrentArrayData] = useState(arrayData);

  //*a ranger
  const liDomContentForNavLink = (elt) => {
    return elt.name === "toContact" ? (
      <StyledLinkA $nav href={elt.url}>{`${elt.content}`}</StyledLinkA>
    ) : (
      <StyledLink $nav to={elt.url}>{`${elt.content}`}</StyledLink>
    );
  };
  //*

  useEffect(() => {
    if (currentArrayData[0].type === "nav") {
      // console.log("okay01");
      for (let i = 0; i < currentArrayData.length; i++) {
        if (currentArrayData[i].name === content) {
          // console.log("okay02");
          const currentIndex = currentArrayData.indexOf(currentArrayData[i]);
          const upToDateCurrentArrayData = [...currentArrayData];
          const isAboutButtonExist = upToDateCurrentArrayData.some(
            (elt) => elt.name === "about"
          );

          if (isAboutButtonExist === false) {
            // console.log("okay03");
            upToDateCurrentArrayData.splice(currentIndex, 1, {
              id: `0${currentIndex}`,
              content: "À propos",
              name: "about",
              borderTop: false,
              type: "nav",
              url: "/about",
            });

            setCurrentArrayData(upToDateCurrentArrayData);
          } else {
            // console.log("okay04");
            setCurrentArrayData(arrayData);
          }
        }
      }
    }
  }, [content, currentArrayData, arrayData]);

  return currentArrayData.map((elt) => {
    switch (elt.type) {
      case "logo":
        return location === "home" ? (
          <li key={`${elt.id}-${elt.name}-${location}`}>
            <Logo
              name={elt.name}
              url={elt.url}
              width="80%"
              height="100%"
              margin="15% 15% 0 0"
              bool={false}
              color={colors.white}
            />
          </li>
        ) : (
          <li key={`${elt.id}-${elt.name}-${location}`}>
            <Logo
              name={elt.name}
              url={elt.url}
              width="100%"
              height="100%"
              margin="0 10px 0 0"
              bool={true}
              color={colors.tertiary}
            />
          </li>
        );
      case "toContact":
        return (
          <li key={`${elt.id}-${elt.name}-${location}`}>
            {elt.name !== "tel" ? (
              <StyledLinkA target={"_blank"} href={elt.url} rel="noreferrer">
                <StyledTitle>
                  {elt.name === "email" ? (
                    <FontAwesomeIcon icon={faEnvelope} />
                  ) : (
                    <FontAwesomeIcon icon={faLocationDot} />
                  )}
                </StyledTitle>{" "}
                {`${elt.content}`}
              </StyledLinkA>
            ) : (
              <span>
                <StyledTitle>
                  {elt.name === "tel" && <FontAwesomeIcon icon={faPhone} />}
                </StyledTitle>{" "}
                {`${elt.content}`}
              </span>
            )}
          </li>
        );
      default:
        return elt.borderTop === false ? (
          <StyledList noTopBorder={true} key={`${elt.id}-${elt.name}`}>
            {liDomContentForNavLink(elt)}
          </StyledList>
        ) : (
          <StyledList key={`${elt.id}-${elt.name}`}>
            {liDomContentForNavLink(elt)}
          </StyledList>
        );
    }
  });
}

// arrayData.map((elt) =>
//     elt.type !== undefined && elt.type === "logo" ? (
//       <li key={`${elt.id}-${elt.name}`} style={{ width: "100%" }}>
//         <Logo
//           name={elt.name}
//           url={elt.url}
//           width="80%"
//           height="100%"
//           margin="0px 0px"
//           bool={true}
//         />
//       </li>
//     ) : elt.name === "Compétences" || elt.name === "Accueil" ? (
//       <StyledList
//         noTopBorder={true}
//         key={`${elt.id}-${elt.name}`}
//       >{`${elt.name}`}</StyledList>
//     ) : (
//       <StyledList key={`${elt.id}-${elt.name}`}>{`${elt.name}`}</StyledList>
//     )
