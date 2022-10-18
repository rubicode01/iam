import HybridDesk from "./img/HybridDesk.png";
import fourBlog from "./img/fourBlog.png";
import Pokemon from "./img/Pokemon.png";
import ConeTwo from "./img/ConeTwo.png";

import GatoradeFitness from "./img/GatoradeFitness.png";
import LaysWebsite from "./img/LaysWebsite.png";
import PunicaWebsite from "./img/PunicaWebsite.png";

const logo = "IP";

const meta = {
  title: "IP [Design+Code]",
  description: "Design meets Code",
  text: "",
};

const datahome = {
  title: "Digital Design ",
  description: "lorem ipsum",
  content: "",
};

const dataabout = {
  title: "wer ich bin",
  description: "Vom alltag inspiriert",
  content: "Individuelle Nutzererlebnisse und kreative Lösungen schaffen",
  info: "",
};

const datatimeline = {
  title: "was ich bisher gemacht habe",
  description: "Erfahrungen nutzen",
  content: "",
  timeline: [
    {
      id: 1,
      title: "Full-Stack Web & App Entwickler",
      experience: "Weiterbildung",
      description:
        "Frontend- und Backend Programmierung, Datenbanken (SQL, NoSQL), UI/UX Design, Agile Development",
      // buttonText: "View Projects",
      date: "2022",
      icon: "school",
    },
    {
      id: 2,
      title: "Graphic Designer",
      experience: "Berufserfahrung",
      description:
        "Visual Design, Creative Direction, Frontend-Developer, User Experience, Project Management",
      // buttonText: "View Backend Projects",
      date: "2004 - 2022",
      icon: "work",
    },
    {
      id: 3,
      title: "Mediengestalterin Ditial und Printmedien",
      experience: "Berufserfahrung",
      description:
        "Visual Design, User Experience, Project Management, Frontend-Development",
      // buttonText: "Company Website",
      date: "2022 - 2004",
      icon: "work",
    },
    {
      id: 4,
      title: "Mediengestalterin Digital- und Printmedien",
      experience: "Berufserfahrung",
      description: "Visual Design, Project Management",
      // buttonText: "Course Certificate",
      date: "2001 - 2002",
      icon: "work",
    },
    {
      id: 5,
      title: "Mediengestalter Digital- und Printmedien",
      experience: "Ausbildung",
      description: "Visual Design, Frontend-Development",
      // buttonText: "College Projects",
      date: "1998 - 2001",
      icon: "school",
    },
  ],
};

const dataportfolio = {
  title: "Design trifft Code",
  description: "Inspirieren lassen?",

  content: "",

  portfolio: [
    {
      img: HybridDesk,
      headline: "HybridDesk-App",
      description:
        "Frontend -und Backendprogrammierung (Ionic-React, Bootstrap & MongoDB)",
      link: "https://hybrid-desk.netlify.app/login",
      tag: "code",
    },
    {
      img: fourBlog,
      headline: "Blog4Groups",
      description: "Frontend -und Backendprogrammierung ",
      skills: "(React, Bootstrap & postgreSQL)",
      link: "https://blog4groups.netlify.app/",
      tag: "code",
    },
    {
      img: LaysWebsite,
      headline: "Lay's Website Relaunch 2015",
      description: "Design und Frontend-Programmierung",
      skills: "(HTML, CSS & jQuery)",
      tag: "code",
    },

    {
      img: Pokemon,
      headline: "Pokemon Website",
      description: "Fronten- und Backendprogammierung",
      skills: "(React, Bootstrap & MongoDB)",
      link: "https://github.com/rubicode01",
      tag: "code",
    },
    {
      img: ConeTwo,
      headline: "Con-E",
      description: "Internes Icon zur Einführung von O365",
      tag: "design",
    },
    {
      img: GatoradeFitness,
      headline: "Gatorade Fitness",
      description: "Zielgruppengerichtete Designüberarbeitung",
      tag: "design",
    },

    {
      img: PunicaWebsite,
      headline: "Punica Website Relaunch 2016",
      description: "Design und Mock-up",
      tag: "design",
    },
  ],
};

const dataskills = {
  title: "Ein paar Fakten",
  description: "Was ich kann und was ich besser sein lassen sollte",
  content: "",

  info: "",
  skills: [
    {
      name: "Design",
      skills: "Adobe Creative Suit",
      value: 86.3,
      resume: "man lernt doch nie aus :-)",
    },
    {
      name: "Code ",
      skills: "(HTML, CSS, JS, Frameworks, SQL & noSQL",
      value: 63.4,
      resume: "tendenz steigend",
    },
    {
      name: "Gärtnern",
      value: 30,
      resume: "bei mir wächst kein Gras",
    },
    {
      name: "Kochen",
      value: 90,
      resume: "entspanndend",
    },

    {
      name: "Organisation und Sturkturierung",
      value: 90,
      resume: "kleiner Sauberkeitsfanatiker :-)",
    },
  ],
};

const contactConfig = {
  title: "Intersse Geweckt?",
  subline: "ich würde mich freuen",
  YOUR_EMAIL: "name@domain.com",
  YOUR_FONE: "(555)123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const datasocial = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "mailto:rubicode01@gmx.de",
};

export {
  logo,
  meta,
  datahome,
  dataabout,
  datatimeline,
  dataskills,
  dataportfolio,
  contactConfig,
  datasocial,
};
