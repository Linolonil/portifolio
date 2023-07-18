import React, { useState, useEffect } from "react";
import "./contact.css";

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
      <h2 className="section_title">Get in Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything</h3>
          <p className="contact_details">Don't like forms? Send me an email.</p>
        </div>
        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>
          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Insert your subject"
            />
          </div>
          <div className="contact_form-div contact_form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
