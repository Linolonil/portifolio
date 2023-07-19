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
            Olá, sou Lino Jorge, um desenvolvedor web nascido e criado em Manaus, Amazonas. Assim como a rica diversidade da minha cidade natal, minha paixão pelo desenvolvimento web também é multifacetada e repleta de possibilidades.
            Estou animado para continuar minha jornada no desenvolvimento web, explorando novas tecnologias e enfrentando desafios empolgantes. Com cada linha de código, busco contribuir para o crescimento e o sucesso de projetos digitais, elevando-os a um patamar superior.
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
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skill_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI/UX design</h3>
                <span className="skills_number ">80%</span>
              </div>

              <div className="skill_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Photography</h3>
                <span className="skills_number ">60%</span>
              </div>
              <div className="skill_bar">
                <span className="skills_percentage photography"></span>
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
