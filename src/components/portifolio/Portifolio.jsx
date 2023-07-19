import React, { useState } from "react";
import "./portifolio.css";
import Menu from "./Menu";

const Portifolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    if (categoryItem === "Everything") {
      // Se a opção "Everything" for selecionada, restaura os itens originais do portfólio
      setItems(Menu);
    } else {
      // Filtra os itens com base na categoria selecionada
      const updatedItems = Menu.filter((curElement) => {
        return curElement.category === categoryItem;
      });
      setItems(updatedItems);
    }
  };
  return (
    <section className="work container section portifolio" id="portifolio">
      <h2 className="section_title">Meus Projetos</h2>
      <div className="work_filters">
        <span className="work_item" onClick={() => filterItem("Everything")}>
          Mostrar Tudo
        </span>
        <span className="work_item" onClick={() => filterItem("Front-end")}>
          Front-end
        </span>
        <span className="work_item" onClick={() => filterItem("Backend")}>
          Backend
        </span>
        <span className="work_item" onClick={() => filterItem("Full-stack")}>
          Full-Stack
        </span>
        <span className="work_item" onClick={() => filterItem("Landpages")}>
          Landpages
        </span>
      </div>
      <div className="work_container grid">
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
