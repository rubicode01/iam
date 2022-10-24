import HybridDesk from "./img/HybridDesk.png";
import fourBlog from "./img/fourBlog.png";

import LaysWebsite from "./img/LaysWebsite.png";
import PunicaWebsite from "./img/PunicaWebsite.png";

const logo = "IP";

const meta = {
  title: "CREATIVE DESIGN",
  description: "Design Digital",
  text: "",
};

const datahome = {
  title: "",
  description: "",
  content: "",
};

const dataabout = {
  title: "über mich",
  description: "Ein Blick",
  content: "Design, Marketing, Digital ",
  info: "",
};

const datatimeline = {
  title: "erfrahungen nutzen",
  description: "neue Perspektiven",
  content:
    "Seit 2001 hatte ich das Glück an unterschiedlichsten Projekten mitzuwirken",
  timeline: [
    {
      id: 1,
      title: "Full-Stack Web & App Entwickler",
      experience: "Weiterbildung",
      description:
        "Frontend- und Backend Programmierung, Datenbanken (SQL, NoSQL), UI/UX Design, Agile Development",

      date: "2022",
      icon: "school",
    },
    {
      id: 2,
      title: "Graphic Designer",
      experience: "Berufserfahrung",
      description:
        "Visual & Creative Design, Brand-Design Frontend-Developer, User Experience, Project Management",

      date: "2004 - 2022",
      icon: "work",
    },
    {
      id: 3,
      title: "Mediengestalterin Ditial und Printmedien",
      experience: "Berufserfahrung",
      description:
        "Visual & Creative Design, Project Management, Frontend-Development",

      date: "2002 - 2004",
      icon: "work",
    },
    {
      id: 4,
      title: "Mediengestalterin Digital- und Printmedien",
      experience: "Berufserfahrung",
      description: "Visual & Creative Design",

      date: "2001 - 2002",
      icon: "work",
    },
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
  ],
};

const dataskills = {
  title: "Know-how",
  description: " Die Kombination",
  content: " Visuell Werte darstellen",

  info: "",
  skills: [
    {
      name: "Creative Design",
      skills: "",
      value: 90,
    },
    {
      name: "Digital Design",
      skills: "",
      value: 80,
    },
    {
      name: "Frontend- & Backend Development",
      value: 65,
    },
    {
      name: "Projekt Management",
      value: 85,
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
