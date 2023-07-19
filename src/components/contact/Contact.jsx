import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./contact.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgejvkno");
  if (state.succeeded) {
    return <p>Entrarei em contato em breve, obrigado!</p>;
  }
  return (
    // <form className="contact_form" onSubmit={handleSubmit}>
    //   <label htmlFor="email">Email Address</label>
    //   <input id="email" type="email" name="email" />
    //   <ValidationError prefix="Email" field="email" errors={state.errors} />
    //   <textarea id="message" name="message" />
    //   <ValidationError prefix="Message" field="message" errors={state.errors} />
    //   <button className="btn" type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="contact_form-group">
        <div className="contact_form-div">
          <input
            id="email"
            type="email"
            name="email"
            className="contact_form-input"
            placeholder="Insira seu e-mail"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="contact_form-div contact_form-area">
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          className="contact_form-input"
          placeholder="Sua mensagem, aqui."
        ></textarea>
      </div>
      <button className="btn">Send Message</button>
    </form>
  );
}

const Contact = () => {
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

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Entrar em contato</h2>
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
