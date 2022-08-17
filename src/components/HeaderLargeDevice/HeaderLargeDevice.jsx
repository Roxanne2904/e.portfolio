//*components
import NavList from "../NavList/NavList";
//*styled
import { StyledHeader, StyledBlockList } from "./styled";
//*utils
import { listNav, listLogo } from "../../utils/lists/lists";

export default function HeaderLargeDevice() {
  return (
    <StyledHeader>
      <nav style={{ width: "100%" }}>
        <StyledBlockList logo={true}>
          <NavList arrayData={listLogo} />
        </StyledBlockList>
        <StyledBlockList>
          <NavList arrayData={listNav} />
        </StyledBlockList>
      </nav>
    </StyledHeader>
  );
}
