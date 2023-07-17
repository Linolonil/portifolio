import React, { useState } from "react";
import "./portifolio.css";
import Menu from "./Menu";

const Portifolio = () => {
  const [items, setItems] = useState(Menu);
  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>
      <div className="work_filters">
        <span className="work_item">Everything</span>
        <span className="work_item">Creative</span>
        <span className="work_item">Art</span>
        <span className="work_item">Design</span>
        <span className="work_item">Branding</span>
      </div>
      <div className="work_container gri">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a
                href="https://www.youtube.com/watch?v=o3IP5HeFRO0&list=PLrKudo5h_b8DNVrsMdvR0G-ckA9o2m_13&index=1"
                className="work_button"
              >
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
