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
  description: "Insights",
  content: "",
  info: "",
};

const datatimeline = {
  title: "Erfahrungen",
  description: "Vielfältig kreativ",
  content: "",
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
        "Visual & Creative Design, Brand-Design, Frontend-Developer, User Experience, Project Management",

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
  description: "Design & Coding",

  content: "",

  portfolio: [
    {
      img: HybridDesk,
      headline: "HybridDesk-App",
      description: "Design, Frontend & Backend Development",
      skills: "Inonic React, Bootstrap & MongoDB",
      link: "https://hybrid-desk.netlify.app/login",
      tag: "code",
    },
    {
      img: fourBlog,
      headline: "Blog4Groups",
      description: "Frontend & Backend Development",
      skills: "React, Bootstrap & PostgreSQL",
      link: "https://blog4groups.netlify.app/",
      tag: "code",
    },
    {
      img: LaysWebsite,
      headline: "Lay's Website Relaunch 2015",
      description: "Design & Frontend Development",
      skills: "HTML, CSS",
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
  title: "Synergien",
  description: "Kenntnisse",
  content: "",

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
      name: "Frontend & Backend Development",
      value: 70,
    },
    {
      name: "Project Management",
      value: 85,
    },
  ],
};

const contactConfig = {
  title: "Kontakt",
  description: "Gemeinsam durchstarten?",
  content: "Lassen Sie uns gemeinsam ",
  github: "https://github.com/rubicode01",
  email: "mailto:rubicode01@gmail.com",
};

const datasocial = {
  github: "https://github.com/rubicode01",
  email: "mailto:rubicode01@gmail.com",
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
