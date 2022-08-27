export const listNav = [
  {
    id: "00",
    content: "Accueil",
    name: "home",
    borderTop: "true",
    type: "nav",
    url: "/",
  },
  {
    id: "01",
    content: "Me contacter",
    name: "toContact",
    borderTop: "false",
    type: "nav",
    url: "#toContact",
  },
  {
    id: "02",
    content: "Projets",
    name: "projects",
    borderTop: "false",
    type: "nav",
    url: "/projects",
  },
  {
    id: "03",
    content: "Compétences",
    name: "skills",
    borderTop: "false",
    type: "nav",
    url: "/skills",
  },
  {
    id: "04",
    content: "À propos",
    name: "about",
    borderTop: "false",
    type: "nav",
    url: "/about",
  },
];

export const openclassroomsTrainingUrl =
  "https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react#path-tabs";

export const listLogo = [
  {
    id: "01",
    name: "github",
    type: "logo",
    url: "https://github.com/Roxanne2904/",
    projects: [
      {
        id: "01",
        urlP: "https://github.com/Roxanne2904/VietteRoxanne_14_25052022",
        urlApp: "https://oc-rv-hrnet-app.netlify.app/",
        display: "Hrnet",
        name: "hrnet",
        tools: [
          "React",
          "Redux",
          "React-Redux",
          "storybook",
          "styled-components",
        ],
        library: "https://github.com/Roxanne2904/react-calendar-library",
        description: `Convertir une ancienne application JQuery en une application React. Les librairies jQuery seront elles aussi à convertir, mais dans un premier temps seule une d'entre elles doit l'être. Dans mon cas j'ai choisi de travailler sur la librairie JQuery du date picker réalisée "from scratch".`,
      },
      {
        id: "02",
        urlP: "https://github.com/Roxanne2904/VietteRoxanne_13_18042022",
        urlApp: "https://oc-rv-argent-bank.netlify.app/",
        display: "ArgentBank",
        name: "argentBank",
        tools: ["React", "Redux", "React Redux", "styled-components"],

        description: [
          "Phase 1:",
          "Intégrer une application web, d'après une maquette, complète et responsive avec React et utiliser Redux pour le state global. L'utilisateur doit pouvoir se connecter et se déconnecter du système, avoir accès à son profil et le modifier tout en mettant à jour la base de données.",
          "Phase 2:",
          "Faire une proposition d'endpoints pour la phase de transaction via un fichier swagger au format YML.",
        ],
      },
      {
        id: "03",
        urlP: "https://github.com/Roxanne2904/VietteRoxanne_12_23122020",
        urlApp: "https://oc-rv-sportsee.netlify.app/",
        display: "SportSee",
        name: "sportSee",
        tools: ["React.js", "Recharts", "JSDoc", "Sass"],
        maquette:
          "https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1",
        description:
          "Intégrer la nouvelle interface de la page de profil utilisateur d'une application de sport. L'objectif est d'utiliser React, bien documenter son code avec jsdoc, récupérer des données auprès de l'API et créer l'affichage des graphiques. L'application est visitable avec des données mockées et doit être responsive, dans un premier temps, seulement en version desktop.",
      },
      {
        id: "04",
        urlP: "https://github.com/Roxanne2904/VietteRoxanne_11_23122020",
        urlApp: "https://kasa-rv-project.netlify.app/",
        display: "Kasa",
        name: "kasa",
        tools: ["React.js", "Sass"],
        maquette:
          "https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1",
        description:
          "Mettre en place l'application sous React et développer l'ensemble en créant des composants réutilisables et des routes React Router. Une maquette Figma a été mise à disposition et certaines contraintes fonctionnelles sont à prendre en compte.",
      },
    ],
  },
  {
    id: "02",
    name: "linkedin",
    type: "logo",
    url: "https://www.linkedin.com/in/roxanne-viette-15a365203/",
  },
  {
    id: "03",
    name: "instagram",
    type: "logo",
    url: "https://www.instagram.com/roxannevietteillustratrice/",
  },
];
export const listToContact = [
  {
    id: "00",
    alt: "téléphone",
    type: "toContact",
    name: "tel",
    title: "Tèl",
    content: "07 83 04 45 39",
  },
  {
    id: "01",
    alt: "email",
    type: "toContact",
    name: "email",
    title: "E-mail",
    content: " roxanne-viette@hotmail.fr",
    url: "mailto:roxanne-viette@hotmail.fr",
  },
  {
    id: "02",
    alt: "localisation",
    type: "toContact",
    name: "lieu",
    title: "Lieu",
    content: "Chartres",
    url: "https://www.google.com/maps?q=chartres&rlz=1C1ONGR_frFR933FR933&um=1&ie=UTF-8&sa=X&ved=2ahUKEwidz7r6x9D5AhUM-xoKHYphCjoQ_AUoAXoECAIQAw",
  },
];

export const listProgressBar = [
  {
    title: [
      [{ name: "tech", id: "01", display: "Outils de Tech" }],
      [
        {
          id: "01",
          display: "HTML5/ CSS3",
          name: "htmlCss",
          level: "60%",
        },
        {
          id: "02",
          display: "JavaScript",
          name: "javaScript",
          level: "55%",
        },
        {
          id: "03",
          display: "React.js",
          name: "react",
          level: "55%",
        },
        {
          id: "04",
          display: "Redux",
          name: "redux",
          level: "45%",
        },
        {
          id: "05",
          display: "React Redux",
          name: "reactRedux",
          level: "55%",
        },
        {
          id: "06",
          display: "Sass",
          name: "sass",
          level: "60%",
        },
        {
          id: "07",
          display: "Styled-components",
          name: "styledComponents",
          level: "60%",
        },
        {
          id: "08",
          display: "Storybook",
          name: "storybook",
          level: "30%",
        },
        {
          id: "09",
          display: "Recharts",
          name: "recharts",
          level: "40%",
        },
        {
          id: "10",
          display: "React-Hook-Form",
          name: "reactHookForm",
          level: "40%",
        },
        {
          id: "11",
          display: "Framer Motion",
          name: "framerMotion",
          level: "10%",
        },
        {
          id: "12",
          display: "Git et GitHub",
          name: "storybook",
          level: "50%",
        },
      ],
    ],
  },
  {
    title: [
      [{ name: "design", id: "02", display: "Logiciels" }],
      [
        {
          id: "01",
          display: "Adobe Photoshop",
          name: "photoshop",
          level: "75%",
        },
        {
          id: "02",
          display: "Adobe Illustrator",
          name: "illustrator",
          level: "70%",
        },
        {
          id: "03",
          display: "Clip Studio Paint",
          name: "clipStudioPaint",
          level: "40%",
        },
        {
          id: "04",
          display: "Figma",
          name: "figma",
          level: "30%",
        },
      ],
    ],
  },
  {
    title: [
      [{ name: "languages", id: "03", display: "Langues" }],
      [
        {
          id: "01",
          display: "Français",
          name: "fr",
          level: "100%",
        },
        {
          id: "02",
          display: "Anglais nv.B1",
          name: "en",
          level: "55%",
        },
        {
          id: "03",
          display: "Portuguais",
          name: "por",
          level: "30%",
        },
      ],
    ],
  },
];
