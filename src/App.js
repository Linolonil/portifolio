import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import DarkMode from "./components/darkmode/DarkMode";

import Loading from "./components/loading/Loading";

function App() {
  return (
    <div className="App">
      <Loading />
      <div className="main">
        <Sidebar />
        <DarkMode />
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        <Resume id="resume" />
        <Portfolio id="portifolio" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
