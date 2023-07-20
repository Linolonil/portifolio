import React from "react";
import "./about.css";
import me from "../../assets/me.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">Sobre mim</h2>

      <div className="about_container grid">
        <img src={me} alt="sobre" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Olá, eu sou o Lino, e há 7 meses, iniciei minha jornada no mundo
              da programação. Desde então, tenho me dedicado intensamente para
              ampliar meus conhecimentos e habilidades nessa área. Adquiri
              proficiência em várias tecnologias essenciais, como HTML, CSS,
              JavaScript, TypeScript, React, Node.js e MySQL. Além disso, estou
              me capacitando por meio de um curso de Engenharia da Computação em
              conjunto com um treinamento específico de programação fullstack na
              Growdev.
            </p>
            <a
              href="https://www.youtube.com/watch?v=o3IP5HeFRO0&list=PLrKudo5h_b8DNVrsMdvR0G-ckA9o2m_13&index=1"
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">HTML</h3>
                <span className="skills_number">70%</span>
              </div>

              <div className="skill_bar">
                <span className="skills_percentage html"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">CSS3</h3>
                <span className="skills_number ">80%</span>
              </div>

              <div className="skill_bar">
                <span className="skills_percentage css"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">JAVASCRIPT</h3>
                <span className="skills_number ">60%</span>
              </div>
              <div className="skill_bar">
                <span className="skills_percentage javascript"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">TYPESCRIPT</h3>
                <span className="skills_number ">30%</span>
              </div>
              <div className="skill_bar">
                <span className="skills_percentage typescript"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">REACT</h3>
                <span className="skills_number ">40%</span>
              </div>
              <div className="skill_bar">
                <span className="skills_percentage react"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">NODE JS</h3>
                <span className="skills_number ">30%</span>
              </div>
              <div className="skill_bar">
                <span className="skills_percentage node"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">MY SQL</h3>
                <span className="skills_number ">40%</span>
              </div>
              <div className="skill_bar">
                <span className="skills_percentage sql"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
