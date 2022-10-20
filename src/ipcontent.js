import HybridDesk from "./img/HybridDesk.png";
import fourBlog from "./img/fourBlog.png";
// import Pokemon from "./img/Pokemon.png";
// import ConeTwo from "./img/ConeTwo.png";

// import GatoradeFitness from "./img/GatoradeFitness.png";
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
  description: "Vom Alltag inspiert",
  content:
    "Als Grafikerin liebe ich die Kombination aus Design und Programmieren. ",
  info: "",
};

const datatimeline = {
  title: "Meine Zeit",
  description: "Erfahrungen nutzen",
  content:
    "Seit 2001 habe ich Freude daran, komplexe Probleme in einfache, schöne und individuelle Designs zu verwandeln.",
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
        "Visual & Creative Design, Frontend-Developer, User Experience, Project Management",
      // buttonText: "View Backend Projects",
      date: "2004 - 2022",
      icon: "work",
    },
    {
      id: 3,
      title: "Mediengestalterin Ditial und Printmedien",
      experience: "Berufserfahrung",
      description:
        "Visual & Creative Design, Project Management, Frontend-Development",
      // buttonText: "Company Website",
      date: "2002 - 2004",
      icon: "work",
    },
    {
      id: 4,
      title: "Mediengestalterin Digital- und Printmedien",
      experience: "Berufserfahrung",
      description: "Visual & Creative Design",
      // buttonText: "Course Certificate",
      date: "2001 - 2002",
      icon: "work",
    },
    // {
    //   id: 5,
    //   title: "Mediengestalter Digital- und Printmedien",
    //   experience: "Ausbildung",
    //   description: "Visual Design, Frontend-Development",
    //   // buttonText: "College Projects",
    //   date: "1998 - 2001",
    //   icon: "school",
    // },
  ],
};

const dataportfolio = {
  title: "Portfolio",
  description: "Design & Code",

  content: "",

  portfolio: [
    {
      img: HybridDesk,
      headline: "HybridDesk-App",
      description: "Design & Code",
      skills: "Inonic React, Bootstrap & MongoDB",
      link: "https://hybrid-desk.netlify.app/login",
      tag: "code",
    },
    {
      img: fourBlog,
      headline: "Blog4Groups",
      description: "Frontend & Backend",
      skills: "React, Bootstrap & postgreSQL",
      link: "https://blog4groups.netlify.app/",
      tag: "code",
    },
    {
      img: LaysWebsite,
      headline: "Lay's Website Relaunch 2015",
      description: "Design & Code",
      skills: "HTML, CSS & jQuery",
      tag: "code",
    },
    {
      img: PunicaWebsite,
      headline: "Punica Website Relaunch 2016",
      description: "Design",
      tag: "design",
    },
    // {
    //   img: Pokemon,
    //   headline: "Pokemon Website",
    //   description: "Code Frontend & Backend",
    //   skills: "React, Bootstrap & MongoDB",
    //   link: "https://github.com/rubicode01",
    //   tag: "code",
    // },
    // {
    //   img: ConeTwo,
    //   headline: "Con-E",
    //   description: "Design",
    //   tag: "design",
    // },
    // {
    //   img: GatoradeFitness,
    //   headline: "Gatorade Fitness",
    //   description: "Design",
    //   tag: "design",
    // },
  ],
};

const dataskills = {
  title: "Meine Kentnisse",
  description: "Spannende Bereiche",
  content: "",

  info: "",
  skills: [
    {
      name: "Creative Design",
      skills: "",
      value: 90,
      // resume: "man lernt nie aus :-)",
    },
    {
      name: "Digital Design",
      skills: "",
      value: 80,
      // resume: "darf gerne mehr sein",
    },
    {
      name: "Frontend- & Backend Development",
      value: 65,
      // resume: "einfach verständlich machen",
    },
    {
      name: "Projekt Management",
      value: 80,
      // resume: "strukturiert umsetzten...",
    },
  ],
};

const contactConfig = {
  title: "Kontakt",
  description: "Gemeinsam durchstarten?",
  content: "Lassen Sie uns gemeinsam ",
  github: "https://github.com/rubicode01",
  email: "mailto:rubicode01@gmx.de",
};

const datasocial = {
  github: "https://github.com/rubicode01",
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
