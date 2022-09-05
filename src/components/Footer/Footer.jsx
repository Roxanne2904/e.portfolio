import List from "../List/List";
// import Corner from "../Corner/Corner";
import { listLogo, listToContact } from "../../utils/lists/lists";
// import logo from "../../assets/my_logo_namesoff.png";
// import { colors } from "../../utils/GlobalStyled";
import {
  StyledFooter,
  StyledFooterBlockList,
  StyledSectionContent,
  StyledMainContent,
  StyledListContent,
  StyledSecondaryTitle,
  StyledContactMeBlock,
} from "./styled";
export default function Footer({ content, width, height }) {
  return (
    <StyledFooter>
      <StyledSectionContent id="toContact" width={width}>
        {/* <StyledTriangle></StyledTriangle> */}
        <StyledContactMeBlock width={width}>
          <StyledSecondaryTitle width={width} height={height}>
            {/* <StyledTriangle $smaller></StyledTriangle> */}
            <span>Me contacter</span>
          </StyledSecondaryTitle>
        </StyledContactMeBlock>
        <StyledMainContent width={width}>
          {/* <StyledImgContent>
            <img src={logo} alt="mon logo" />
          </StyledImgContent> */}
          <StyledListContent width={width}>
            <StyledFooterBlockList width={width} height={height}>
              <List
                width={width}
                arrayData={listToContact}
                location={"footer"}
                content={content}
              />
            </StyledFooterBlockList>
            <StyledFooterBlockList type={"logo"} width={width} height={height}>
              <List
                width={width}
                arrayData={listLogo}
                location={"footer"}
                content={content}
              />
            </StyledFooterBlockList>
          </StyledListContent>

          {/* <svg
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", bottom: "1%" }}
          >
            <rect
              x="10%"
              y="95%"
              width="65%"
              height="0.5%"
              fill={colors.tertiary}
            />
          </svg> */}
        </StyledMainContent>
      </StyledSectionContent>
    </StyledFooter>
  );
}
