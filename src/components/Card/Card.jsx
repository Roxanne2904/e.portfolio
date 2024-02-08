import { useState } from "react";
//*components
import Logo from "../Logo/Logo";
import CardTitle from "../CardAnimation/CardAnimation";
import ComplexCardAnimation from "../ComplexCardAnimation/ComplexCardAnimation";
//*utils
import { colors } from "../../utils/GlobalStyled";
import { listLogo } from "../../utils/lists/lists";
//*styled
import {
	StyledMainContent,
	StyledProjectsParagraph,
	StyledListContent,
	StyledUlBlock,
	StyledUl,
	StyledTechLi,
	StyledFigma,
	StyledLogoContent,
	StyledLinkAppContent,
	StyledLink,
	StyledModelAndGitHubLinkContent,
	StyledLi,
	StyledAnimationBlock,
	StyledSimpleAnimationDate,
} from "./styled";
import { useEffect } from "react";

const filterProjects = (projects, contentPage) => {
	console.log("projects:", projects);
	if (!projects) return [];
	switch (contentPage) {
		case "projects":
			return projects.filter((p) => {
				return p.type === "done";
			});
		case "projectsInProgress":
			return projects.filter((p) => p.type === "inProgress");
		case "challenges":
			return projects.filter((p) => p.type === "challenges");

		default:
			return <></>;
	}
};

export default function Card({ width, height, content }) {
	const [simplestCardAnimation, setSimplestCardAnimation] = useState(false);
	const projectsList = filterProjects(listLogo[0].projects, content);

	const logoGitHub = listLogo[0];
	let id = 0;

	useEffect(() => {
		if (width >= 1800 && width < 3000) {
			height < 800 || height > 1200
				? setSimplestCardAnimation(true)
				: setSimplestCardAnimation(false);
		} else {
			setSimplestCardAnimation(true);
		}
	}, [width, height, simplestCardAnimation]);

	return projectsList.map((elt) => {
		return (
			<StyledLi
				data-id={`${elt.id}`}
				key={`${elt.id}-${elt.name}`}
				width={width}
				height={height}
			>
				{simplestCardAnimation && (
					<StyledAnimationBlock>
						<StyledSimpleAnimationDate>{elt.date}</StyledSimpleAnimationDate>
					</StyledAnimationBlock>
				)}
				<StyledMainContent data-id={`${elt.id}`} width={width} height={height}>
					{width >= 1800 && width < 3000 ? (
						height < 800 || height > 1200 ? (
							<CardTitle width={width} height={height} content={elt.display} />
						) : (
							<ComplexCardAnimation
								width={width}
								height={height}
								date={elt.date}
								display={elt.display}
							/>
						)
					) : (
						<CardTitle width={width} height={height} content={elt.display} />
					)}

					<StyledProjectsParagraph width={width} height={height}>
						{typeof elt.description !== "string" ? (
							<span>
								{elt.description[0]}
								<br />
								{elt.name === "sportSee" ? (
									<span
										style={{
											color: "red",
											display: "block",
											textAlign: "initial",
										}}
									>
										{elt.description[1]}
									</span>
								) : (
									elt.description[1]
								)}
								<br />
								{elt.description[2]}
								<br />
								{elt.description[3]}
								<br />
							</span>
						) : (
							elt.description
						)}
					</StyledProjectsParagraph>

					<div style={{ width: "100%" }}>
						<StyledListContent width={width}>
							<StyledUlBlock width={width}>
								<StyledUl width={width}>
									{elt.tools.map((elt) => {
										id++;
										return (
											<StyledTechLi
												width={width}
												height={height}
												key={`${elt}-${id}`}
											>{`${elt}`}</StyledTechLi>
										);
									})}
								</StyledUl>
							</StyledUlBlock>
							<StyledModelAndGitHubLinkContent>
								{elt.maquette ? (
									<StyledFigma width={width} height={height}>
										{elt.maquette === undefined ? (
											elt.library === undefined ? (
												""
											) : (
												<a
													href={`${elt.library}`}
													alt={"voir la librairie"}
													target={"_blank"}
													rel={"noreferrer"}
												>
													{`Plugin react-calendar`}
												</a>
											)
										) : (
											<a
												href={`${elt.maquette}`}
												alt={"voir la maquette"}
												target={"_blank"}
												rel={"noreferrer"}
											>
												{`Maquette Figma`}
											</a>
										)}
									</StyledFigma>
								) : (
									<span>
										{" "}
										<em>Pas de maquette pour ce projet</em>{" "}
									</span>
								)}
								<StyledLogoContent width={width}>
									<Logo
										name={logoGitHub.name}
										url={elt.urlP}
										width={
											width < 1000
												? width < 450
													? `2.3rem`
													: `3rem`
												: height < 1200
												? `20%`
												: `4vmin`
										}
										height={
											width < 1000
												? width < 450
													? `2.3rem`
													: `3rem`
												: height < 890
												? `20%`
												: height < 1200
												? `20%`
												: `4vmin`
										}
										margin="inherit"
										bool={false}
										color={colors.tertiary}
									/>
								</StyledLogoContent>
							</StyledModelAndGitHubLinkContent>
						</StyledListContent>
						<StyledLinkAppContent>
							{elt.urlApp && (
								<StyledLink
									width={width}
									height={height}
									$app
									href={`${elt.urlApp}`}
									alt="l'appli"
									target={"_blank"}
									rel={"noreferrer"}
								>
									Voir l'application
								</StyledLink>
							)}
						</StyledLinkAppContent>
					</div>
				</StyledMainContent>
			</StyledLi>
		);
	});
}
