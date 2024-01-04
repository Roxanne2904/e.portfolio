import {
	StyledBlockList,
	StyledLi,
	StyledSectionTitle,
	StyledMainContent,
} from "./styled";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { listProgressBar } from "../../utils/lists/lists";
import { motion } from "framer-motion";

export default function Skills({ width, height }) {
	return (
		<motion.div
			style={{ width: width < 800 ? "100%" : "70%" }}
			initial={{ scaleY: 0, opacity: 0 }}
			animate={{ scaleY: 1, opacity: 1 }}
			exit={{ scaleY: 0, opacity: 0 }}
			transition={{ duration: 0.7, delay: 0.5 }}
		>
			<StyledMainContent width={width}>
				<StyledBlockList>
					{listProgressBar.map((elt) => {
						const arrayDatas = elt.title[0];
						const listDatas = elt.title[1];

						return (
							<StyledLi
								key={`${arrayDatas[0].name}=${arrayDatas[0].id}`}
								width={width}
								height={height}
							>
								<StyledSectionTitle>
									{" "}
									{arrayDatas[0].display}{" "}
								</StyledSectionTitle>
								<ProgressBar list={listDatas} width={width} height={height} />
							</StyledLi>
						);
					})}
				</StyledBlockList>
			</StyledMainContent>
		</motion.div>
	);
}
