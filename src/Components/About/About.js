import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout id="about">
      <div className="container">
        <h1 className="heading">About Me</h1>
        <p>
          I am studying web development in e-commerce and web applications
          course at Changemakers education Boden. I have been given tasks and
          projects to be creative considering modern era web and e-commerce
          challenges. <br />
          <br />
          During course, I have been using diverse tools and programming
          languages, e.g., HTML, CSS, Bootstrap, WordPress, GIT, Javascript,
          React Js (on going), Node Js, Visual studio Code and designing tools
          like Adobe XD. Then later in this course we will learn Digital
          marketing as well. <br />
          <br />
          My main interest is in front-end development, but I also have a
          passion for back-end development and learn new tools that contribute
          to my work. I take great pride in not only being able to complete work
          to the high standard you expect but also go the extra mile wherever
          possible. I enjoy getting to know new tools, and then apply those
          tools to deliver my work. <br />
          <br />
          For innovative web and e-commerce challenges, I am eager to join a
          company for my LIA for 24 weeks, which hopefully leading to exciting
          job and projects. I can quickly and efficiently join your team using
          continuous-integration methods and tools such as Git and Agile.
          <br />
          <br />
          If it sounds thrilled, then just feel free to contact.
        </p>
      </div>
    </StyledAbout>
  );
};
const StyledAbout = styled.section`
  margin: 50px 0;
  p {
    line-height: 38px;
    word-spacing: 6px;
    /* background-color: #1d2130;
    border-radius: 15px;
    box-shadow: 2px 2px 12px 2px #b0b2b6; */
  }
`;

export default About;
