// import { Link } from "react-router-dom";
import {
  StyledList,
  StyledTitle,
  StyledLinkA,
  StyledLink,
  StyledBasicSpan,
} from "./styled";
import Logo from "../Logo/Logo";
import { colors } from "../../utils/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function List({ arrayData, location, content, width }) {
  // const [isOk, setIsOk] = useState(false);
  const [test, setTest] = useState(window.location.pathname);
  const [currentTabRemoved, setCurrentTabRemoved] = useState(null);
  const [currentArrayData, setcurrentArrayData] = useState(arrayData);

  const item = {
    hidden: { translateX: "-150vw" },
    show: {
      translateX: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 40 },
    },
  };

  useEffect(() => {
    arrayData.map((elt) => {
      if (window.location.pathname !== test) {
        setTest(window.location.pathname);
      }
      if (test === elt.url) {
        const myCurrentArrayData = arrayData[0].type === "nav" && [
          ...arrayData,
        ];
        const tabIndex = myCurrentArrayData.indexOf(elt);
        const tabRemoved = myCurrentArrayData.splice(tabIndex, 1);
        const datasUpdated = [...myCurrentArrayData];

        if (currentTabRemoved === null) {
          setCurrentTabRemoved(tabRemoved);
          setcurrentArrayData(datasUpdated);
          // console.log(freshDatas);
        } else if (currentTabRemoved[0].url !== test) {
          setCurrentTabRemoved(tabRemoved);
          setcurrentArrayData(datasUpdated);
          // console.log(freshDatas);
        }
        // console.log(currentTabRemoved !== null && currentTabRemoved[0].url);

        return currentArrayData;
      }
      return currentArrayData;
    });
  });

  //*a ranger
  const liDomContentForNavLink = (elt) => {
    return elt.name === "toContact" ? (
      <StyledLinkA $nav href={elt.url}>{`${elt.content}`}</StyledLinkA>
    ) : (
      <StyledLink $nav to={elt.url}>{`${elt.content}`}</StyledLink>
    );
  };
  //*

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
              <StyledLinkA
                target={"_blank"}
                href={elt.url}
                rel="noreferrer"
                title={elt.alt}
              >
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
              <StyledBasicSpan>
                <StyledTitle>
                  {elt.name === "tel" && <FontAwesomeIcon icon={faPhone} />}
                </StyledTitle>{" "}
                {`${elt.content}`}
              </StyledBasicSpan>
            )}
          </li>
        );
      default:
        return elt.borderTop === "false" ? (
          <StyledList
            width={width}
            topborder={elt.borderTop}
            key={`${elt.id}-${elt.name}`}
            variants={item}
          >
            {liDomContentForNavLink(elt)}
          </StyledList>
        ) : (
          <StyledList
            key={`${elt.id}-${elt.name}`}
            variants={item}
            width={width}
          >
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
