import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

import SkillsData from "./SkillsData";

const Skills = () => {
  return (
    <SkillsStyled id="skills">
      <div className="container">
        <h1 className="heading">Skills</h1>
        <ul className="skills-list">
          {SkillsData.map((skill) => {
            return <Skill key={skill.text} skill={skill} />;
          })}
        </ul>
      </div>
    </SkillsStyled>
  );
};
const SkillsStyled = styled.div`
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default Skills;
