import React from "react";
import styled from "styled-components";
import { projects } from "../../data";
import { SectionTitle } from "../shared/SharedComponents";
import { ReactComponent as External } from "../../img/external.svg";
import { ReactComponent as Github } from "../../img/github.svg";

const Container = styled.div``;
const ProjectCardImageContainer = styled.div`
  width: 100%;
  height: 10em;
`;
const ProjectCardImage = styled.img`
  object-fit: fit;
  width: 100%;
  height: 100%;
`;

const ProjectDescription = styled.div`
  width: 80%;
  margin: 0 auto;
  color: black;
`;

const ProjectTitle = styled(SectionTitle)`
  text-align: left;
`;
const ProjectTextDescription = styled.p``;

const ProjectContainer = styled.div`
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5em;
  position: relative;
`;

const GoToPage = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  transition: all 0.5 ease;
  &:hover {
    background-color: #f2f2f2;
    transform: scale(1.1);
  }
`;
const Project = ({ item }) => {
  return (
    <ProjectContainer>
      <ProjectCardImageContainer>
        <ProjectCardImage src={item.img} alt="Github-Finder image" />
      </ProjectCardImageContainer>

      <ProjectDescription>
        <ProjectTitle>{item.title}</ProjectTitle>
        <ProjectTextDescription>{item.description}</ProjectTextDescription>
      </ProjectDescription>
      <GoToPage>
        <Icon>
          <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
            <External />
          </a>
        </Icon>
        <Icon>
          <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </Icon>
      </GoToPage>
    </ProjectContainer>
  );
};

const ProjectCards = () => {
  return (
    <Container>
      {projects.map((item) => (
        <Project item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default ProjectCards;
