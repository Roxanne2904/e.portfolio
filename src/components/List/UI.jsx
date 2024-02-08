import { motion } from "framer-motion";
import { StyledLinkA, StyledLink, StyledList, StyledBtn } from "./styled";
import { useConsumeProjectListContext } from "../../context/projectsListContext";
import { Dropdown } from "../Dropdown";
import { projectOptions } from "./projectsDropdown/options";
import { useWindow } from "../../hooks/useWindows";
import { useCallback } from "react";

export const LiDomContentForNavLink = ({ elt, width, height, item }) => {
	const { myState: openProjects, setMyState: setOpenProjects } =
		useConsumeProjectListContext();

	const handleClick = useCallback(() => {
		if (openProjects) setOpenProjects((prev) => !prev);
	}, [setOpenProjects, openProjects]);

	useWindow(handleClick);

	switch (elt.name) {
		case "toContact":
			return (
				<motion.li key={`${elt.id}-${elt.name}`} variants={item}>
					<StyledLinkA $nav href={elt.url}>
						<StyledList width={width} height={height} border={elt.borderLeft}>
							{`${elt.content}`}
						</StyledList>
					</StyledLinkA>
				</motion.li>
			);
		case "projects":
			return (
				<motion.li key={`${elt.id}-${elt.name}`} variants={item}>
					<StyledBtn
						role="button"
						tabIndex="0"
						$nav
						onClick={(e) => {
							e.stopPropagation();
							setOpenProjects((prev) => !prev);
						}}
						onKeyPress={(e) => {
							e.stopPropagation();
							if (e.key === "Enter") setOpenProjects((prev) => !prev);
						}}
					>
						<StyledList width={width} height={height} border={elt.borderLeft}>
							{`${elt.content}`}
						</StyledList>
					</StyledBtn>
					{openProjects && <Dropdown options={projectOptions} />}
				</motion.li>
			);
		default:
			return (
				<motion.li key={`${elt.id}-${elt.name}`} variants={item}>
					<StyledLink $nav to={elt.url}>
						<StyledList width={width} height={height} border={elt.borderLeft}>
							{`${elt.content}`}
						</StyledList>
					</StyledLink>
				</motion.li>
			);
	}
};
