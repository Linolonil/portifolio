import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact";
import DarkMode from "./components/darkmode/DarkMode";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <DarkMode />
      <Home id="home" />
      <About id="about" />
      <Services id="services" />
      <Resume id="resume" />
      <Portifolio id="portifolio" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
