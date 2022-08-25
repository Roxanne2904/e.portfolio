// import { Link } from "react-router-dom";
// import logo from "../../assets/my_logo_namesoff.png";
//*components
import List from "../List/List";
//*styled
import { StyledHeader, StyledBlockList } from "./styled";
//*utils
import { listNav } from "../../utils/lists/lists";

export default function HeaderLargeDevice({ content, width }) {
  const container = {
    hidden: { translateX: "-150vw" },
    show: {
      translateX: 0,

      transition: { delayChildren: 1, staggerChildren: 0.3 },
    },
  };

  return (
    <StyledHeader width={width}>
      <nav style={{ width: "100%" }}>
        {/* <div style={{ position: "absolute", top: "0" }}>
          <Link to={"/"}>
            <img src={logo} alt="mon logo" style={{ width: "20%" }}></img>
          </Link>
        </div> */}
        <StyledBlockList
          width={width}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <List arrayData={listNav} content={content} width={width} />
        </StyledBlockList>
      </nav>
    </StyledHeader>
  );
}
