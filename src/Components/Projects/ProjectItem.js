import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");
const ProjectItem = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ItemStyled className="project-item">
      <div className="pro-img">
        <img
          src={project.img}
          onClick={() => {
            setModalIsOpen(true);
          }}
          alt={project.title}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          overlayClassName="Overlay"
          className="Modal"
        >
          <img className="modal-img " src={project.img} alt={project.title} />
          <span
            className="close-icon"
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            X
          </span>
        </Modal>
      </div>
      <div className="pro-details">
        <h2 className="pro-title">{project.title}</h2>
        <h3 className="pro-tools">
          Tools Used: <span>{project.tools}</span>{" "}
        </h3>
        <p>{project.details}</p>
      </div>
    </ItemStyled>
  );
};

const ItemStyled = styled.li`
  display: flex;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  background-color: white;

  .pro-img {
    flex: 1;
    cursor: pointer;
    border: 1px solid black;
    box-shadow: 5px 5px 7px 3px rgba(0, 0, 0, 0.21);
    transition: all 0.5s ease;
    &:hover {
      box-shadow: 6px 6px 8px 5px rgba(0, 0, 0, 0.41);
    }
    img {
      width: 100%;
    }
  }

  .pro-details {
    flex: 2;
    padding-left: 40px;
    line-height: 30px;
    .pro-title {
      font-size: 30px;
      color: var(--background-color-2);
      display: inline-block;
      padding: 5px 0;
    }
    .pro-tools {
      span {
        margin-left: 15px;
        /* background-color: var(--background-color-2); */
        color: var(--font-color-2);
      }
    }
    p {
      padding: 25px 0 20px 0;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;

    .pro-details {
      padding-left: 0;
      .pro-title {
        padding: 15px 0;
      }
    }
  }
`;

export default ProjectItem;
