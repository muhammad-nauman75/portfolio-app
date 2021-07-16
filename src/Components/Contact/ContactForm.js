import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSubmitMessage("");
    }, 4000);
  }, [submitMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_97b77qo",
        "template_yqbs3eg",
        e.target,
        "user_m4KE47RxkiZ7R3MFloMXm"
      )
      .then((res) => {
        setIsSubmitting(false);
        setSubmitMessage("Your message has been sent");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormStyled>
      <form onSubmit={handleSubmit}>
        <h1 className="form-heading">Contact Form</h1>
        <p className={submitMessage.length > 5 ? "alert" : ""}>
          {submitMessage}
        </p>

        <div className="form-row">
          <input
            className="input-field"
            type="text"
            autoComplete="off"
            name="name"
            placeholder="Your Name*"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <input
            className="input-field"
            type="email"
            name="email"
            autoComplete="off"
            required
            placeholder="Your Email Adress*"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <textarea
            className="input-field"
            name="message"
            placeholder="Your Message*"
            required
            cols="30"
            rows="8"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className="action-container">
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </FormStyled>
  );
};
const FormStyled = styled.section`
  form {
    width: 80%;
    margin: 40px auto auto auto;
    @media (max-width: 700px) {
      width: 100%;
    }
    .form-heading {
      padding: 20px 0;
      font-size: 35px;
      color: var(--background-color-2);
    }
    .alert {
      background-color: #38b000;
      color: white;
      padding: 15px;
      text-align: center;
      border-radius: 40px;
    }
    .action-container {
      width: 50%;
      margin: auto;
      button {
        width: 100%;
        padding: 15px;
        cursor: pointer;
        background-color: var(--background-color-2);

        border: none;
        border-radius: 8px;
        color: white;
        transition: all 0.3s ease;
        &:hover {
          background-color: var(--background-color-3);

          box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 0.31);
        }
      }
    }
  }

  .form-row {
    .input-field {
      width: 100%;
      padding: 14px;
      border: none;
      border-bottom: 2px solid var(--background-color-2);
      border-radius: 15px;
      margin: 15px 0;

      color: var(--font-color);
      transition: 0.3s ease all;

      &:focus {
        border: none;
        outline: none;
        border-bottom: 6px solid var(--background-color-2);
      }
    }
    .invalid {
      background-color: #f3aaaa55;
    }
  }
`;

export default ContactForm;
