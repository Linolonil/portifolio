import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";
import Testimonials from "../testimonials/Testimonials";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title">Experience</h2>

      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            } else {
              return null; // ou algum valor padrão que faça sentido para o seu caso
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            } else {
              return null; // ou algum valor padrão que faça sentido para o seu caso
            }
          })}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Resume;
