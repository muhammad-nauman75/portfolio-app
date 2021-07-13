import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import projectData from "./projectsData";

const Projects = () => {
  return (
    <ProjectStyled id="projects">
      <div className="container">
        <h1 className="heading">Projects</h1>
        <ul className="projects">
          {projectData.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </ProjectStyled>
  );
};
const ProjectStyled = styled.section``;
export default Projects;
