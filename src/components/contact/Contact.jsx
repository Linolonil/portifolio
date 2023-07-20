import React, { useState, useEffect } from "react";
import ContactForm from "../contactForm/ContactForm";
import HeaderSocial from "../contact/HeaderSocial";

import "./contact.css";

const Contact = () => {
  // mouse visible quando chegar no contact
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const contactElement = document.getElementById("contact");
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const contactOffsetTop = contactElement.offsetTop;

    setShowScrollButton(scrollY + windowHeight >= contactOffsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Entrar em contato</h2>
      <HeaderSocial/>
      <div className="contact_container grid">
        <div className="contact_info">
          <p className="contact_details">Me envie um e-mail por aqui 😊.</p>
        </div>
        <ContactForm />

        {/* arrow up */}

        <div className={`scroll_up ${showScrollButton ? "show" : ""}`}>
          <a href="#home" onClick={scrollToTop} className="mouse_wrapper">
            <span className="home_scroll-name">
              <span className="mouse-up">
                <span className="whell-up"></span>
              </span>
            </span>
          </a>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Contact;
