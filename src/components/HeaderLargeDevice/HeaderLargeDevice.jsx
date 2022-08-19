// import { Link } from "react-router-dom";
// import logo from "../../assets/my_logo_namesoff.png";
//*components
import List from "../List/List";
//*styled
import { StyledHeader, StyledBlockList } from "./styled";
//*utils
import { listNav } from "../../utils/lists/lists";

export default function HeaderLargeDevice({ content }) {
  return (
    <StyledHeader>
      <nav style={{ width: "100%" }}>
        {/* <div style={{ position: "absolute", top: "0" }}>
          <Link to={"/"}>
            <img src={logo} alt="mon logo" style={{ width: "20%" }}></img>
          </Link>
        </div> */}
        <StyledBlockList>
          <List arrayData={listNav} content={content} />
        </StyledBlockList>
      </nav>
    </StyledHeader>
  );
}
