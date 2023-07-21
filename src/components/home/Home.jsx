import React from "react";
import "./home.css";
import Me from "../../assets/me.png";
import DownloadButton from "../about/DownloadButton";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <h1 className="home_name">
          Lino Jorge <br></br> Bittencourt da Silva
        </h1>
        <span className="home_education">Desenvolvedor Web</span>
        <section className="home_buttons">
          <DownloadButton />
          <a href="#contact" className="btn_nocolor">
            Entrar em contato
          </a>
        </section>
      </div>
      <img src={Me} alt="Foto do Lino" className="home_img" />
    </section>
  );
};

export default Home;
