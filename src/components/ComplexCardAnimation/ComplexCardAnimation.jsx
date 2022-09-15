import {
  StyledSecondaryTitle,
  StyledTitleTxt,
  StyledSecondaryTitleCopy,
  StyledDate,
} from "./styled";

export default function ComplexCardAnimation({ width, height, date, display }) {
  return (
    <div>
      <StyledSecondaryTitle height={height} width={width}>
        <StyledDate>
          <em>{date}</em>
        </StyledDate>
        <StyledTitleTxt width={width} height={height}>
          {display}
        </StyledTitleTxt>
      </StyledSecondaryTitle>
      <StyledSecondaryTitleCopy>{display}</StyledSecondaryTitleCopy>
    </div>
  );
}
