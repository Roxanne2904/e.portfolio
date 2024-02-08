export const listNav = [
	{
		id: "00",
		content: "Accueil",
		name: "home",
		borderLeft: "true",
		type: "nav",
		url: "/",
	},
	{
		id: "01",
		content: "Me contacter",
		name: "toContact",
		borderLeft: "false",
		type: "nav",
		url: "#toContact",
	},
	{
		id: "02",
		content: "Projets",
		name: "projects",
		borderLeft: "false",
		type: "nav",
		url: null,
	},
	{
		id: "03",
		content: "Compétences",
		name: "skills",
		borderLeft: "false",
		type: "nav",
		url: "/skills",
	},
	{
		id: "04",
		content: "À propos",
		name: "about",
		borderLeft: "false",
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
				id: "00",
				type: "done",
				urlP: "",
				urlApp: "",
				display: "Calendar Library",
				name: "reactCalendarLibrary",
				date: "25.05.2022",
				tools: ["React", "Storybook", "Rollup"],
				storybook:
					"https://react-calendar-library.netlify.app/?path=/story/ui-datepicker--default",
				npm: "https://www.npmjs.com/package/react-calendar-library",
				description: `Création d'une librairie "from scratch" d'un calendrier développé sous React. 
				              Possibilité de l'installer via npm et d'avoir toute la documentation sur storybook.
							  Ma librairie a été utilisé sur le project Hrnet ! ;)`,
			},
			{
				id: "01",
				type: "done",
				urlP: "https://github.com/Roxanne2904/VietteRoxanne_14_25052022",
				urlApp: "https://oc-rv-hrnet-app.netlify.app/",
				display: "Hrnet",
				name: "hrnet",
				date: "25.05.2022",
				tools: [
					"React",
					"Redux",
					"React-Redux",
					"storybook",
					"styled-components",
				],
				library: "https://github.com/Roxanne2904/react-calendar-library",
				description: `Convertir une ancienne application JQuery en une application React. Les librairies jQuery sont elles aussi à convertir, mais dans un premier temps seule une d'entre elles doit l'être. Dans mon cas j'ai choisi de travailler sur le date picker. Cette nouvelle librairie sous React a été réalisé "from scratch".`,
			},
			{
				id: "02",
				type: "done",
				urlP: "https://github.com/Roxanne2904/VietteRoxanne_13_18042022",
				urlApp: "https://oc-rv-argent-bank.netlify.app/",
				display: "ArgentBank",
				name: "argentBank",
				date: "18.04.2022",
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
				type: "done",
				urlP: "https://github.com/Roxanne2904/VietteRoxanne_12_23122020",
				urlApp: "https://oc-rv-sportsee.netlify.app/",
				display: "SportSee",
				name: "sportSee",
				date: "18.02.2022",
				tools: ["React.js", "Recharts", "JSDoc", "Sass"],
				maquette:
					"https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1",
				description: [
					"Intégrer la nouvelle interface de la page de profil utilisateur d'une application de sport. L'objectif est d'utiliser React, bien documenter son code avec jsdoc, récupérer des données auprès de l'API et créer l'affichage des graphiques.",
					"Attention : ⚠️ version desktop uniquement",
					"L'application est visitable avec des données mockées et doit être responsive, dans un premier temps, seulement en version desktop.",
				],
			},
			{
				id: "04",
				type: "done",
				urlP: "https://github.com/Roxanne2904/VietteRoxanne_11_23122020",
				urlApp: "https://kasa-rv-project.netlify.app/",
				display: "Kasa",
				name: "kasa",
				date: "14.12.2021",
				tools: ["React.js", "Sass"],
				maquette:
					"https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1",
				description:
					"Le projet consistait a mettre en place l'application sous React et développer l'ensemble en créant des composants réutilisables et des routes React Router. Une maquette Figma a été mise à disposition et certaines contraintes fonctionnelles sont à prendre en compte.",
			},
			{
				id: "05",
				type: "challenges",
				urlP: "https://github.com/Roxanne2904/typeScript_training",
				urlApp: null,
				display: "Défis TypeScript",
				name: "typeScriptChallenge",
				date: "01.01.2024",
				tools: ["TypeScript"],
				maquette: null,
				description: "Suite de défis en TypeScript",
			},
			{
				id: "06",
				type: "challenges",
				urlP: "https://github.com/Roxanne2904/codewars_training/tree/master",
				urlApp: null,
				display: "Défis CodeWars",
				name: "codeWarsChallenge",
				date: "01.01.2024",
				tools: ["TypeScript"],
				maquette: null,
				description: "Mes défis codeWars",
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
		content: "28000 Chartres",
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
					level: "70%",
				},
				{
					id: "02",
					display: "JavaScript",
					name: "javaScript",
					level: "70%",
				},
				{
					id: "03",
					display: "React.js",
					name: "react",
					level: "70%",
				},
				{
					id: "03-00",
					display: "Hooks de React",
					name: "reacthooks",
					level: "70%",
				},
				{
					id: "04",
					display: "Styled-components",
					name: "styledComponents",
					level: "70%",
				},
				{
					id: "05",
					display: "Git et GitHub",
					name: "git",
					level: "70%",
				},
				{
					id: "06",
					display: "React Redux",
					name: "reactRedux",
					level: "65%",
				},
				{
					id: "06-00",
					display: "Redux toolkit",
					name: "reduxtoolkit",
					level: "65%",
				},
				{
					id: "06-01",
					display: "Redux toolkit query",
					name: "reduxtoolkitquery",
					level: "65%",
				},
				{
					id: "06-02",
					display: "Axios",
					name: "axios",
					level: "65%",
				},
				{
					id: "07",
					display: "Sass",
					name: "sass",
					level: "65%",
				},
				{
					id: "08",
					display: "TypeScript",
					name: "typescript",
					level: "60%",
				},
				{
					id: "09",
					display: "Redux",
					name: "redux",
					level: "50%",
				},
				{
					id: "10",
					display: "Storybook",
					name: "storybook",
					level: "50%",
				},
				{
					id: "11",
					display: "Recharts",
					name: "recharts",
					level: "40%",
				},
				{
					id: "12",
					display: "React-Hook-Form",
					name: "reactHookForm",
					level: "40%",
				},
				{
					id: "13",
					display: "Vue.js",
					name: "vue",
					level: "30%",
				},
				{
					id: "14",
					display: "Vue.js",
					name: "vue",
					level: "30%",
				},
				{
					id: "15",
					display: "VueX",
					name: "vuex",
					level: "30%",
				},
				{
					id: "16",
					display: "Flutter",
					name: "flutter",
					level: "30%",
				},
				{
					id: "17",
					display: "Node.js",
					name: "node",
					level: "20%",
				},
				{
					id: "18",
					display: "Sequelize",
					name: "sequelize",
					level: "20%",
				},
				{
					id: "19",
					display: "Express.js",
					name: "express",
					level: "20%",
				},
				{
					id: "20",
					display: "Docker",
					name: "docker",
					level: "20%",
				},
				{
					id: "21",
					display: "Framer Motion",
					name: "framerMotion",
					level: "10%",
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
					level: "75%",
				},
				{
					id: "03",
					display: "Clip Studio Paint",
					name: "clipStudioPaint",
					level: "60%",
				},
				{
					id: "04",
					display: "Figma",
					name: "figma",
					level: "50%",
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
					display: "Anglais nv.B2",
					name: "en",
					level: "65%",
				},
				{
					id: "03",
					display: "Portuguais",
					name: "por",
					level: "50%",
				},
			],
		],
	},
];
