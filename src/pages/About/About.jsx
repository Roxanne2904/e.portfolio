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
} from "./styled";
//*utils
import { openclassroomsTrainingUrl } from "../../utils/lists/lists";
import { colors } from "../../utils/GlobalStyled";

export default function About({ width, height }) {
  return (
    <StyledParagraphContent
      width={width}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <StyledProfilImage width={width}></StyledProfilImage>
      <StyledWelcomeMsg width={width}>Bonjour,</StyledWelcomeMsg>
      <br />
      <br />
      <StyledParagraph width={width} height={height}>
        Après 9 ans d'expérience dans l'entrepreneuriat en tant
        qu'illustratrice/graphiste mais également peintre décoratrice, j'aspire
        à ce jour à me réorienter vers une activité professionnelle plus
        spécifique et concrète. Néanmoins, toujours créative, ma démarche s'est
        donc dirigée vers un secteur où mes compétences peuvent y être
        complémentaire. Ayant déjà été intéressé par la création de mon propre
        site web, c'est naturellement que le métier de développeur front-end a
        attiré mon attention. Après y avoir suivi{" "}
        <StyledLink target={"_blank"} href={openclassroomsTrainingUrl}>
          <strong>la formation chez Openclassrooms</strong>
        </StyledLink>
        , je me retrouve à ce jour en recherche d'emploi.
        <br />
        <br />
        Ce qui me plaît dans ce métier, c'est qu'il vise à « donner vie » à une
        idée. J'y retrouve la même satisfaction que j'ai à peindre ou à
        dessiner. Au sein de ma formation, au delà de la technique, j'ai appris
        à me dépasser et à faire face aux difficultés. J'y ai découvert une
        vraie passion pour le CSS et côté programmation, j'ai très rapidement
        accroché avec React et Redux. Lors de certains projets, mes compétences
        de graphiste/ illustratrice ont été utile, par exemple, sur FIGMA, outil
        de design graphique, pour la création de gabarit. Habituée à communiquer
        avec d'autre intervenants ou à gérer plusieurs missions simultanément,
        mon expérience m’a permis de bien cerner qu’un code bien commenté est
        essentiel, aussi bien pour ses collègues que pour soi. Le bilan de cette
        expérience n'a fait qu’accroître mon goût pour le développement qui me
        motive à tenir une veille technologique, entreprendre des projets
        personnels et à progresser.
        <br />
        <br />
        Au regard de toute mon expérience, et en toute humilité, j’ai bel et
        bien conscience de l’étendu des connaissances qu’il me reste encore à
        découvrir. Ce faisant, je me complairais à l’idée de poursuivre cette
        aventure à travers un nouvel emploi ou des projets.
        <br />
        <br />
        En espérant pouvoir vous captiver davantage à travers ce e-portfolio, je
        vous souhaite une très bonne visite {"🤗"}
        .
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
