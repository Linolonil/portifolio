import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  function ContactForm() {
    const [state, handleSubmit] = useForm("mgejvkno");
    if (state.succeeded) {
      return <p>Entrarei em contato em breve, obrigado!</p>;
    }
    return (
      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="contact_form-group">
          <div className="contact_form-div">
            <input
              id="email"
              type="email"
              name="email"
              className="contact_form-input"
              placeholder="Insira seu e-mail"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="contact_form-div contact_form-area contact_title">
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            className="contact_form-input contact_title"
            placeholder="Sua mensagem, aqui."
            required
          ></textarea>
        </div>
        <button className="btn">Send Message</button>
      </form>
    );
  }
  return <ContactForm />;
}

export default ContactForm;
