import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = ({ activeSection }) => {
  return (
    <aside className="aside">
      <a href="#home" className="nav_logo">
        <img src={Logo} alt="logo" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li
              className={`nav_item ${activeSection === "home" ? "active" : ""}`}
            >
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li
              className={`nav_item ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li
              className={`nav_item ${
                activeSection === "services" ? "active" : ""
              }`}
            >
              <a href="#services" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li
              className={`nav_item ${
                activeSection === "resume" ? "active" : ""
              }`}
            >
              <a href="#resume" className="nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li
              className={`nav_item ${
                activeSection === "portifolio" ? "active" : ""
              }`}
            >
              <a href="#portifolio" className="nav_link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li
              className={`nav_item ${activeSection === "blog" ? "active" : ""}`}
            >
              <a href="#blog" className="nav_link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li
              className={`nav_item ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              <a href="#contact" className="nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copyright"> &copy; 2023</span>
      </div>
    </aside>
  );
};

export default Sidebar;
