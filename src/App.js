import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <div className="App">
      <Loading />
      <Sidebar />
      <Home id="home" />
      <About id="about" />
      <Services id="services" />
      <Resume id="resume" />
      <Portfolio id="portifolio" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
