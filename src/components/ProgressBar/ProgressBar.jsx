import {
  StyledTitle,
  StyledTemplateContent,
  StyledTemplate,
  StyledUl,
} from "./styled";

export default function ProgressBar({ list, width, height }) {
  return list.map((elt) => {
    return (
      <StyledUl key={`${elt.id}-${elt.name}`}>
        <li>
          <StyledTitle widthDevice={width} height={height}>
            {elt.display}
          </StyledTitle>
          <StyledTemplateContent widthDevice={width}>
            <StyledTemplate
              $above
              width={elt.level}
              widthDevice={width}
            ></StyledTemplate>
            <StyledTemplate widthDevice={width}></StyledTemplate>
          </StyledTemplateContent>
        </li>
      </StyledUl>
    );
  });
}
