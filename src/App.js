import "./App.css";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import PortfolioList from "./components/portfolio/PortfolioList";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";
import ScrollButton from "./assets/ScrollButton";

import Header from "./components/header/Header";

function App() {
  return (
    <div className="all">
      <Header />
      <Home />
      <About />
      <Timeline />
      <PortfolioList />
      <Skills />
      <Contact />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
