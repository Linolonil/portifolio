import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Lino Jorge Bittencourt da Silva</h1>
        <span className="home_education">Full-stack developer</span>
        <HeaderSocial />

        <a href="#contact" className="btn">
          Fale comigo
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
