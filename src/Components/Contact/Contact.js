import {
  Email,
  GitHub,
  LinkedIn,
  LocationCity,
  Phone,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <ContactStyled id="contact">
      <div className="container">
        <h1 className="heading">Get In Touch</h1>
        <div className="contact-info">
          <div className="left">
            <div className="info-row">
              <Email /> <span>naumanmalik775@gmail.com</span>
            </div>
            <div className="info-row">
              <Phone /> <span>076-4150092</span>
            </div>
            <div className="info-row">
              <LocationCity /> <span>Umeå, Sweden</span>
            </div>
          </div>
          <div className="right">
            <a href="https://github.com/muhammad-nauman75" target="_blank">
              <GitHub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-nauman-4b9b6b215/"
              target="_blank"
            >
              <LinkedIn className="icon" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled.section`
  .contact-info {
    display: flex;

    margin: auto;
    justify-content: space-around;
    align-items: center;
  }
  .info-row {
    display: flex;
    align-items: center;
    padding: 10px 0;
    span {
      padding-left: 15px;
    }
  }

  .icon {
    font-size: 3rem;
    margin: 10px;
    transition: all 0.5s ease;
    color: var(--background-color-2);
    &:hover {
      color: var(--background-color-3);
    }
  }
`;
export default Contact;
