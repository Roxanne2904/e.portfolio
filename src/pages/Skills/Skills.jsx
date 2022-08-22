import { StyledBlockList, StyledLi } from "./styled";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { listProgressBar } from "../../utils/lists/lists";

export default function Skills() {
  return (
    <div style={{ width: "70%" }}>
      <div>
        <StyledBlockList>
          {listProgressBar.map((elt) => {
            const arrayDatas = elt.title[0];
            const listDatas = elt.title[1];

            return (
              <StyledLi key={`${arrayDatas[0].name}=${arrayDatas[0].id}`}>
                <h3> {arrayDatas[0].display} </h3>
                <ProgressBar list={listDatas} />
              </StyledLi>
            );
          })}
        </StyledBlockList>
      </div>
    </div>
  );
}
