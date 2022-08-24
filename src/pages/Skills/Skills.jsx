import { StyledBlockList, StyledLi } from "./styled";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { listProgressBar } from "../../utils/lists/lists";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      style={{ width: "70%" }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}
