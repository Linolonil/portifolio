import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Frontend",
    description1:
      "Desenvolvimento de Interfaces de Usuário: Eu posso criar interfaces de usuário atraentes e responsivas utilizando HTML, CSS e JavaScript. Isso permite que os usuários interajam com a aplicação de forma intuitiva e amigável.",
    description2:
      " Interação com APIs: Como desenvolvedor de frontend, tenho a capacidade de interagir com APIs fornecidas pelo backend, seja através de requisições HTTP ou WebSocket. Isso me permite buscar e enviar dados ao servidor, atualizando a interface conforme necessário.",
    description3:
      "Utilização de Frameworks e Bibliotecas: Eu sou capaz de utilizar frameworks e bibliotecas como React para desenvolver aplicações frontend mais complexas e reativas. Essas ferramentas facilitam a criação de componentes reutilizáveis e a estruturação do código de forma organizada.",
  },
  {
    id: 2,
    image: Image2,
    title: "Backend",
    description1:
      "Desenvolvimento de Rotas: Eu posso criar e gerenciar rotas no Express.js, permitindo que meu servidor responda a diferentes endpoints e interaja com o frontend e outras APIs de forma organizada e eficiente.",
    description2:
      "Middlewares: Como desenvolvedor, posso utilizar middlewares no Express.js para executar tarefas de pré-processamento, autenticação e validação antes que as solicitações alcancem as rotas. ",
    description3:
      "Integração com Bancos de Dados e ORM: Eu tenho a habilidade de integrar meu servidor Express.js com bancos de dados, como SQL ou NoSQL, e utilizar um ORM para realizar operações de CRUD com facilidade.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Conhecimentos</h2>

      <div className="services_container grid">
        {data.map(
          ({ id, image, title, description1, description2, description3 }) => {
            return (
              <div className="services_card" key={id}>
                <img src={image} alt="" className="services_img" />
                <h3 className="services_title">{title}</h3>
                <ul className="services_description">
                  <li>{description1}</li>
                  <li>{description2}</li>
                  <li>{description3}</li>
                </ul>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Services;
