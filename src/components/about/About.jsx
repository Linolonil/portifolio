import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about_container" id="about">
      <h2 className="section_title">Sobre mim</h2>
      <div className="about_info">
        <p className="about_description">
          Atualmente cursando Engenharia da Computação.<br></br>Me dedico a cada
          dia que passa para ampliar meus conhecimentos e habilidades nessa
          área.
          <br></br> tenho experiência em React.js, JavaScript, Styled
          Components, Material UI, Node.Js, Express e consumo de APIs REST.
          <br></br> Além disso, estou me capacitando por meio de um curso de
          desenvolvimento web fullstack na Growdev.
        </p>
      </div>
    </section>
  );
};

export default About;
