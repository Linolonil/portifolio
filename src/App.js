import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portifolio from "./components/portifolio/Portifolio";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const offset = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= offset && scrollPosition < offset + height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} />
      <main className="main">
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        <Resume id="resume" />
        <Portifolio id="portifolio" />
        <Blog id="blog" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App;
