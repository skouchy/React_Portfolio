import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Email, Github, LinkedIn } from "../../assets/icons";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
        console.log("errorMessage", errorMessage);
      } else {
        setErrorMessage("");
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log(`FORM STATE::  `, formState);
    }
  }

  return (
    <>
      <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </section>
      <div>
        <img src={Email} alt="icon link to email" />
        <img src={Github} alt="icon link to github" />
        <img src={LinkedIn} alt="icon link to linkedIn" />
      </div>
    </>
  );
}