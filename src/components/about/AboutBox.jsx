import React from "react";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>

        <div>
          <h3 className="about_title">5</h3>
          <span className="about_subtitle">Projetos concluidos</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-fire"></i>

        <div>
          <h3 className="about_title">8001</h3>
          <span className="about_subtitle">Vontade de vencer!</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-people"></i>

        <div>
          <h3 className="about_title">2</h3>
          <span className="about_subtitle">Projetos apresentados</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-badge"></i>
        <div>
          <h3 className="about_title">0</h3>
          <span className="about_subtitle">Premios conquistados</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
