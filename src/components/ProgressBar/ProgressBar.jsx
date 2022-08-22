import {
  StyledTitle,
  StyledTemplateContent,
  StyledTemplate,
  StyledUl,
} from "./styled";

export default function ProgressBar({ list }) {
  return list.map((elt) => {
    return (
      <StyledUl key={`${elt.id}-${elt.name}`}>
        <li>
          <StyledTitle>{elt.display}</StyledTitle>
          <StyledTemplateContent>
            <StyledTemplate $above width={elt.level}></StyledTemplate>
            <StyledTemplate></StyledTemplate>
          </StyledTemplateContent>
        </li>
      </StyledUl>
    );
  });
}
