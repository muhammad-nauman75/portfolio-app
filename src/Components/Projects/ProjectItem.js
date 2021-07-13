import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";

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
          alt=""
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          overlayClassName="Overlay"
          className="Modal"
        >
          <img className="modal-img " src={project.img} />
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
  border-radius: 8px;
  background-color: var(--container-background);

  .pro-img {
    flex: 1;
    cursor: pointer;
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
      color: orange;
      padding-bottom: 3px;
    }
    .pro-tools {
      span {
        color: aqua;
        padding-left: 15px;
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
