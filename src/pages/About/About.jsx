//*components
// import Corner from "../../components/Corner/Corner";
import Signature from "../../components/Signature/Signature";
//*styled
import {
	StyledParagraphContent,
	StyledProfilImage,
	StyledWelcomeMsg,
	StyledParagraph,
	StyledLink,
	StyledSignatureContent,
	StyledMediumTitle,
} from "./styled";
//*utils
import { colors } from "../../utils/GlobalStyled";

export default function About({ width, height }) {
	return (
		<StyledParagraphContent
			width={width}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
			transition={{ duration: 0.7, delay: 0.5 }}
		>
			<StyledProfilImage width={width}></StyledProfilImage>
			<StyledWelcomeMsg width={width}>Bonjour,</StyledWelcomeMsg>
			<br />
			<br />
			<StyledParagraph width={width} height={height}>
				<StyledMediumTitle>
					Développeuse Frontend | Spécialisée en React, TypeScript | Expérience
					1 an et + chez{" "}
					<StyledLink target={"_blank"} href={"https://sahar.fr"}>
						SAHAR
					</StyledLink>
				</StyledMediumTitle>
				<br />
				<br />
				Passionnée et compétente développeuse front-end, je cumule plus d'un an
				d'expérience au sein de SAHAR, une entreprise tournée vers l'innovation.
				Mon expertise englobe des technologies essentielles telles que React,
				TypeScript, Redux (en utilisant Redux Toolkit), Storybook, Figma...
				Cette expérience démontre ma capacité à concevoir et à développer des
				interfaces utilisateur dynamiques et performantes, alliant savoir-faire
				technique et créativité.
				<br />
				<br />
				J'ai joué un rôle actif en tant que développeuse frontend. Mes missions
				incluaient l'intégration de contenus selon les maquettes avec une
				attention particulière aux détails. J'ai utilisé React-Typescript et les
				hooks de manière avancée, tout en gérant les versions avec Git et RTK
				Query pour les appels API.
				<br />
				<br />
				Ma contribution s'est étendue à des projets exigeants en React, où j'ai
				pu apporter mon expertise. J'ai également pris en charge des chantiers
				spécifiques, en veillant à maintenir une approche rigoureuse. La
				participation régulière aux daily scrums a facilité une communication
				fluide avec l'équipe Backend et les UX/UI designers. Mon respect des
				deadlines a été un aspect essentiel de mon travail, soulignant mon
				engagement envers la ponctualité.
				<br />
				<br />
				Cette expérience chez SAHAR a été une étape enrichissante, renforçant
				mes compétences et ma préparation à relever de nouveaux défis avec
				humilité et détermination.
				<br />
				<br />
				<br />
				{width > 700 && (
					<StyledSignatureContent>
						<Signature color={colors.tertiary} />
					</StyledSignatureContent>
				)}
			</StyledParagraph>
			{/* <div style={{ transform: "rotate(180deg)" }}>
        <Corner />
      </div> */}
		</StyledParagraphContent>
	);
}
