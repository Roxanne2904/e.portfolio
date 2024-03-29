//*Styled
import { StyledMainTitle, StyledTitleContent, StyledWrapper } from "./styled";
//*components
import HeaderLargeDevice from "../../components/HeaderLargeDevice/HeaderLargeDevice";
import CurrentContent from "../CurrentContent/CurrentContent";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
//*framerMotion
import { motion } from "framer-motion";
//*React
import { useState, useEffect } from "react";
import { ProjectListProvider } from "../../context/projectsListContext";

export default function Page({ title, content }) {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		const updateCurrentWidthAndHeight = () => {
			const currentWidth = window.innerWidth;
			const currentHeight = window.innerHeight;

			setWidth(currentWidth);
			setHeight(currentHeight);
		};
		window.addEventListener("resize", updateCurrentWidthAndHeight);

		return () =>
			window.removeEventListener("resize", updateCurrentWidthAndHeight);
	}, [width, height]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<ProjectListProvider>
				<StyledWrapper width={width}>
					<main>
						<Button type={"returnToTop"} width={width} />

						<div>
							<HeaderLargeDevice
								content={content}
								width={width}
								height={height}
							/>
						</div>

						<StyledTitleContent height={height} width={width}>
							<StyledMainTitle
								width={width}
								height={height}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 1 }}
							>
								{title}
							</StyledMainTitle>
						</StyledTitleContent>

						<div>
							<CurrentContent content={content} width={width} height={height} />
						</div>

						<Footer content={content} width={width} height={height} />
					</main>
				</StyledWrapper>
			</ProjectListProvider>
		</motion.div>
	);
}
