import styled from "styled-components";
import React from "react";
import heroImg from "../../Images/my-img.png";
import { init } from "ityped";
import { useEffect } from "react";
import Particle from "./Particle";

const Home = () => {
  useEffect(() => {
    const myElement = document.querySelector("#typing-text");
    init(myElement, {
      showCursor: false,

      strings: ["Web Developer", "Front-end Developer", "UX Designer"],
    });
  }, []);

  return (
    <SectionStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="container">
        <div className="hero">
          <div className="left">
            <img src={heroImg} alt="" />
          </div>
          <div className="right">
            <div className="text-box">
              <h2>Hi! I am </h2>
              <h1>Muhammad Nauman </h1>
              <h3>
                &#60; <span id="typing-text"></span>
                &nbsp;/&#62;
              </h3>
            </div>
          </div>
        </div>
        <h2 className="hero-bottom">
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. I prefer to keep learning, continue
          challenging myself, and do interesting things that matter.
        </h2>
      </div>
    </SectionStyled>
  );
};
const SectionStyled = styled.section`
  position: relative;
  margin-top: 40px;
  .p-particles-js {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    color: red;
  }
  .hero {
    display: flex;
    align-items: center;
    padding: 130px 0 20px 0;
    .left {
      flex: 2;

      img {
        width: 100%;

        filter: drop-shadow(17px 17px 10px #666666);

        /* padding: 0 80px 0 0; */
      }
      /* @media (max-width: 700px) {
        flex-direction: column;
        img {
          width: 200px;
        }
      } */
    }
    .right {
      flex: 5;
      padding-left: 50px;

      h1 {
        font-family: "Merienda", cursive;
        font-weight: 700;
        font-size: 65px;
        padding: 5px;
        color: var(--background-color-2);
      }
      h2 {
        font-size: 40px;
        font-weight: 700;
        font-family: "Merienda", cursive;
      }
      h3 {
        font-size: 30px;
        font-weight: 600;
      }
      span {
        padding-top: 2px;
        font-size: 30px;
        font-weight: 600;
        /* color: var(--font-color); */
        color: var(--font-color-3);
      }
    }
  }
  .hero-bottom {
    text-align: center;
  }
  @media (max-width: 700px) {
    .hero {
      flex-direction: row;
      justify-content: space-around;
      .left {
        img {
          width: 200px;
          padding-right: 12px;
        }
      }
      .right {
        h1 {
          font-size: 23px;
        }
        h2 {
          font-size: 20px;
        }
        h3,
        span {
          font-size: 15px;
        }
      }
    }
    .hero-bottom {
      font-size: 18px;
    }
  }
`;

export default Home;
