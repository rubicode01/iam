import "./App.css";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import PortfolioList from "./pages/portfolio/PortfolioList";
import Skills from "./pages/skills/Skills";
import Timeline from "./pages/timeline/Timeline";
import ScrollButton from "./assets/ScrollButton";

import Header from "./pages/header/Header";

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
