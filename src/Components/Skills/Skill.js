import React from "react";
import styled from "styled-components";

const Skill = ({ skill }) => {
  return (
    <LiStyled className="skill-box">
      <img src={skill.img} alt="" className="skill-logo" />
      <p className="skill-heading">{skill.text}</p>
    </LiStyled>
  );
};
const LiStyled = styled.li`
  padding: 30px 50px;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--background-color-2);
  }
  img {
    height: 60px;
  }
  p {
    font-size: 16px;
    padding: 8px 0;
  }
  @media (max-width: 700px) {
    padding: 20px 35px;
    img {
      height: 35px;
    }
  }
`;

export default Skill;
