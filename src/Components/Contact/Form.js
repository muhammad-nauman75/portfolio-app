import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_97b77qo",
        "template_yqbs3eg",
        e.target,
        "user_m4KE47RxkiZ7R3MFloMXm"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormStyled>
      <div className="container">
        <form>
          <div className="form-row">
            <input type="text" className="input-field" required />
            <label className="input-label">Full name*</label>
          </div>
          <div className="form-row">
            <input type="text" className="input-field" required />
            <label className="input-label">Email*</label>
          </div>
          <div class="form-row">
            <textarea
              name=""
              // placeholder="Enter Your Message Here"
              class="input-field"
              requiredcols="30"
              rows="10"
            />
            <label className="input-label">Your Message</label>
          </div>
          <div className="action">
            <button className="action-button">Send</button>
          </div>
        </form>
      </div>
    </FormStyled>
  );
};
const FormStyled = styled.section`
  form {
    width: 60%;
    margin: auto;
  }
  .form-row {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    padding-top: 1.5rem;
    & + .form-row {
      margin-top: 1.5rem;
    }
  }

  .input-label {
    color: #8597a3;
    position: absolute;
    top: 1.5rem;
    transition: 0.25s ease;
  }

  .input-field {
    border: 0;
    z-index: 1;
    background-color: transparent;
    border-bottom: 2px solid #eee;
    font: inherit;
    font-size: 1.125rem;
    padding: 0.25rem 0;
    color: white;
    &:focus,
    &:valid {
      outline: 0;
      border-bottom-color: #6658d3;
      background-color: var(--background-color-2);
      & + .input-label {
        color: #6658d3;
        transform: translateY(-1.5rem);
      }
    }
  }

  .action {
    margin-top: 2rem;
  }

  .action-button {
    font: inherit;
    font-size: 1.25rem;
    padding: 1em;
    width: 100%;
    font-weight: 500;
    background-color: #6658d3;
    border-radius: 6px;
    color: #fff;
    border: 0;
    &:focus {
      outline: 0;
    }
  }
`;

export default ContactForm;
