import styled from "styled-components";
import React from "react";
import heroImg from "../../Images/my-img.png";
import { init } from "ityped";
import { useEffect } from "react";
import Particle from "./Particle";
import { GitHub, LinkedIn } from "@material-ui/icons";
import naumanCV from "../../nauman-cv.pdf";

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
            <img src={heroImg} alt="avatar-img" />
          </div>
          <div className="right">
            <div className="text-box">
              <h2>Web Developer </h2>
              <h1>
                Muhammad <span> Nauman</span>{" "}
              </h1>
              <div className="icons">
                <a href={naumanCV} className="resume-link" target="_blank">
                  Resumé
                </a>
                <a href="https://github.com/muhammad-nauman75" target="_blank">
                  <GitHub className="hero-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-nauman-4b9b6b215/"
                  target="_blank"
                >
                  <LinkedIn className="hero-icon" />
                </a>
              </div>
              {/* <h3>
                &#60; <span id="typing-text"></span>
                &nbsp;/&#62;
              </h3> */}
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
        /* color: var(--font-color-2); */
        span {
          font-family: "Merienda", cursive;
          font-weight: 700;
          font-size: 65px;
          padding: 0 10px;
          /* color: var(--background-color-2); */
          background-color: var(--background-color-2);
          color: var(--font-color-2);
        }
      }
      h2 {
        font-size: 40px;
        font-weight: 700;
        font-family: "Merienda", cursive;
      }
      .icons {
        display: flex;
        align-items: center;
        margin: 15px 0 0 50px;

        a {
          margin: 10px;
        }
      }
      .hero-icon {
        font-size: 60px;
        padding: 5px;
        color: var(--background-color-2);
        &:hover {
          border-radius: 8px;
          box-shadow: 0px 0px 31px 3px rgba(0, 0, 0, 0.31);
        }
      }
      .resume-link {
        padding: 15px;
        border-radius: 40px;
        color: white;
        background-color: var(--background-color-2);
        margin-right: 20px;
        &:hover {
          box-shadow: 0px 0px 31px 3px rgba(226, 122, 122, 0.38);
        }
        /* h3 {
        font-size: 30px;
        font-weight: 600; */

        span {
          padding-top: 2px;
          font-size: 30px;
          font-weight: 600;
          /* color: var(--font-color); */
          color: var(--font-color-3);
        }
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
          width: 250px;
          padding-right: 12px;
        }
      }
      .right {
        padding-left: 15px;
        h1 {
          font-size: 35px;
          span {
            font-size: 35px;
          }
        }
        h2 {
          font-size: 20px;
        }
        .icons {
          margin-left: 10px;
          font-size: 30px;
        }
        .hero-icon {
          font-size: 40px;
          padding: 2px;
        }
        .resume-link {
          font-size: 16px;
          margin: 2px;
        }
      }
    }
    .hero-bottom {
      font-size: 18px;
    }
  }
`;

export default Home;
