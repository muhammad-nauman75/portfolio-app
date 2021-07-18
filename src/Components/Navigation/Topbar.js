import React from "react";
import styled from "styled-components";

import Hamburger from "./Hamburger";
const Topbar = ({ manuOpen, setManuOpen }) => {
  return (
    <NavStyled>
      <div className="container">
        <div className="nav-bar">
          <div className="logo">
            <a href="/">
              <h1 className="logo-f-letter">
                M. <span className="logo-text"> Nauman</span>
              </h1>
            </a>
          </div>
          <div className={`nav-section ${manuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => {
                    setManuOpen(false);
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#skills"
                  onClick={() => {
                    setManuOpen(false);
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  onClick={() => {
                    setManuOpen(false);
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => {
                    setManuOpen(false);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="icon-list">
              {/* <a href="https://github.com/muhammad-nauman75">
                <GitHub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-nauman-4b9b6b215/">
                <LinkedIn className="icon" />
              </a> */}
            </div>
          </div>
          <Hamburger
            className="hamburger"
            manuOpen={manuOpen}
            setManuOpen={setManuOpen}
          />
        </div>
      </div>
    </NavStyled>
  );
};
const NavStyled = styled.nav`
  background-color: var(--background-color-2);
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  /* border-bottom: 10px solid var(--background-color-4); */
  /* box-shadow: 0px 20px 25px 9px #8444df; */

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 90px;
    /* @media (max-width: 700px) {
      flex-direction: column;
    } */
  }
  .logo {
    .logo-f-letter {
      font-size: 60px;
      font-weight: 600;
      color: #ffbe0b;
      font-family: "Merienda", cursive;
      span {
        letter-spacing: 10px;
        color: white;
      }
    }
  }
  .nav-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // display: none;
  }
  .icon-list {
    text-align: right;
    padding-right: 20px;
    height: 100%;
    a {
      padding: 0 10px;
      height: 100%;
    }
    .icon {
      font-size: 40px;
      color: var(--background-color-3);
      transition: all 0.5s ease;

      &:hover {
        color: var(--background-color-1);
      }
    }
  }
  .nav-list {
    display: flex;

    justify-content: space-between;
    padding: 18px 0;
    height: 100%;
    a {
      display: block;
      padding: 20px 30px;
      transition: all 0.5s ease;

      &:hover {
        background-color: var(--background-color-3);
        border-radius: 8px;
        box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 0.31);
      }
    }
  }
  @media (max-width: 700px) {
    .nav-section {
      background-color: var(--background-color-2);
      width: 300px;
      position: absolute;
      top: 11.5vh;
      right: 0;
      height: 88.5vh;
      text-align: center;
      transform: translateX(300px);

      transition: 0.5s ease all;
      z-index: 4;
      .nav-list {
        flex-direction: column;
        height: 50vh;
        padding: 40px 0;
      }
      .icon-list {
        text-align: center;
        margin-bottom: 30px;
      }
    }
    .nav-open {
      transform: translate(0px);
    }
  }
`;

export default Topbar;
