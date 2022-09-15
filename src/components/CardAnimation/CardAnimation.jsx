import { StyledSecondarySmallDevice } from "./styled";

export default function CardAnimation({ width, height, content }) {
  return (
    <StyledSecondarySmallDevice width={width} height={height}>
      {content}
    </StyledSecondarySmallDevice>
  );
}
