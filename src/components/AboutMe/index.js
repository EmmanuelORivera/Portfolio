import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2e3039;
`;
const Title = styled.h2`
  font-size: 1.31rem;
  font-weight: 500;
`;

const Description1 = styled.p`
  font-weight: 400;
`;
const AboutMe = () => {
  return (
    <Container>
      <Title>About me</Title>
    </Container>
  );
};

export default AboutMe;
