import { StyledList } from "./styled";
import Logo from "../Logo/Logo";

export default function NavList({ arrayData }) {
  return arrayData.map((elt) => {
    switch (elt.type) {
      case "logo":
        return (
          <li key={`${elt.id}-${elt.name}`} style={{ width: "100%" }}>
            <Logo
              name={elt.name}
              url={elt.url}
              width="80%"
              height="100%"
              margin="0px 0px"
              bool={true}
            />
          </li>
        );
      default:
        return elt.borderTop === false ? (
          <StyledList
            noTopBorder={true}
            key={`${elt.id}-${elt.name}`}
          >{`${elt.name}`}</StyledList>
        ) : (
          <StyledList key={`${elt.id}-${elt.name}`}>{`${elt.name}`}</StyledList>
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
