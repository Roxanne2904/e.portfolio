//*styled
import { StyledTitle, StyledLinkA, StyledBasicSpan } from "./styled";
//*components
import Logo from "../Logo/Logo";
//*font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//*react
import { useEffect, useState } from "react";
//*utils
import { colors } from "../../utils/GlobalStyled";
//*Ui reusable functions
import { LiDomContentForNavLink } from "./UI";
//*framerMotionTools
import { item } from "./framerMotionTools";

export default function List({ arrayData, location, width, height }) {
	const [test, setTest] = useState(window.location.pathname);
	const [currentTabRemoved, setCurrentTabRemoved] = useState(null);
	const [currentArrayData, setcurrentArrayData] = useState(arrayData);

	useEffect(() => {
		arrayData.map((elt) => {
			if (window.location.pathname !== test) {
				setTest(window.location.pathname);
			}
			if (test === elt.url) {
				const myCurrentArrayData = arrayData[0].type === "nav" && [
					...arrayData,
				];
				const tabIndex = myCurrentArrayData.indexOf(elt);
				const tabRemoved = myCurrentArrayData.splice(tabIndex, 1);
				const datasUpdated = [...myCurrentArrayData];

				if (currentTabRemoved === null) {
					setCurrentTabRemoved(tabRemoved);
					setcurrentArrayData(datasUpdated);
				} else if (currentTabRemoved[0].url !== test) {
					setCurrentTabRemoved(tabRemoved);
					setcurrentArrayData(datasUpdated);
				}
				return currentArrayData;
			}
			return currentArrayData;
		});
	});

	return currentArrayData.map((elt) => {
		switch (elt.type) {
			case "logo":
				return location === "home" ? (
					<li key={`${elt.id}-${elt.name}-${location}`}>
						<Logo
							name={elt.name}
							url={elt.url}
							width="80%"
							height="100%"
							margin="15% 15% 0 0"
							bool={false}
							color={colors.white}
						/>
					</li>
				) : (
					<li key={`${elt.id}-${elt.name}-${location}`}>
						<Logo
							name={elt.name}
							url={elt.url}
							width={`100%`}
							height={`100%`}
							margin="0 10px 0 0"
							bool={true}
							color={colors.tertiary}
						/>
					</li>
				);

			case "toContact":
				return (
					<li key={`${elt.id}-${elt.name}-${location}`}>
						{elt.name !== "tel" ? (
							<StyledLinkA
								target={"_blank"}
								href={elt.url}
								rel="noreferrer"
								title={elt.alt}
							>
								<StyledTitle>
									{elt.name === "email" ? (
										<FontAwesomeIcon icon={faEnvelope} />
									) : (
										<FontAwesomeIcon icon={faLocationDot} />
									)}
								</StyledTitle>{" "}
								{`${elt.content}`}
							</StyledLinkA>
						) : (
							<StyledBasicSpan>
								<StyledTitle>
									{elt.name === "tel" && <FontAwesomeIcon icon={faPhone} />}
								</StyledTitle>{" "}
								{`${elt.content}`}
							</StyledBasicSpan>
						)}
					</li>
				);
			default:
				return (
					<LiDomContentForNavLink
						key={`${elt.id}-${elt.name}-${location}`}
						elt={elt}
						width={width}
						height={height}
						item={item}
					/>
				);
		}
	});
}
