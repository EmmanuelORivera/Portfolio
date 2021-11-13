import React from "react";
import {
  Container,
  SectionWrapper,
  SectionTitle,
} from "../shared/SharedComponents";
import ProjectCards from "./ProjectCard";
const MyWork = () => {
  return (
    <Container id="my-work">
      <SectionWrapper>
        <SectionTitle>My Work</SectionTitle>
        <ProjectCards />
      </SectionWrapper>
    </Container>
  );
};

export default MyWork;
