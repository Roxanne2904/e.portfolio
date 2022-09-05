//*components
import List from "../List/List";
//*styled
import {
  StyledHeader,
  StyledBlockList,
  StyledMainLogoContent,
  StyledNav,
  StyledBlockListContent,
} from "./styled";
//*utils
import { listNav } from "../../utils/lists/lists";
import MainLogo from "../MainLogo/MainLogo";
//*framerMotionTools
import { container } from "./framerMotionTools";

export default function HeaderLargeDevice({ content, width, height }) {
  return (
    <StyledHeader width={width}>
      <StyledNav height={height} width={width}>
        {width > 900 && (
          <StyledMainLogoContent to={"/"}>
            <MainLogo />
          </StyledMainLogoContent>
        )}

        <StyledBlockListContent
          width={width}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <StyledBlockList
            width={width}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <List
              arrayData={listNav}
              content={content}
              width={width}
              height={height}
            />
          </StyledBlockList>
        </StyledBlockListContent>
      </StyledNav>
    </StyledHeader>
  );
}
