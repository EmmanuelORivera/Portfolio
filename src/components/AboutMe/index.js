import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2e3039;
  border-radius: 8px;
`;
const AboutMeWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 1em;
`;
const Title = styled.h2`
  font-size: 1.31rem;
  font-weight: 500;
  text-align: center;
`;

const Description1 = styled.p`
  font-weight: 400;
  &::after {
    content: "";
    display: block;
    width: 100%;
    margin: 1em auto;
    height: 1px;
    background-color: white;
    border-radius: 20px;
  }
`;

const Description2 = styled.p`
  font-weight: 600;
`;

const Description3 = styled.p`
  font-weight: 600;
  color: #a9adc1;
`;
const AboutMe = () => {
  return (
    <Container>
      <AboutMeWrapper>
        <Title>About me</Title>
        <Description1>
          I'm interested in this technologies because:
        </Description1>

        <Description2>ReactJS:</Description2>
        <Description3>
          Is easy to create SPA applications, I like the fact that is component
          based, and the JSX syntax is like HTML with JavaScript.
        </Description3>

        <Description2>NodeJS & Express</Description2>
        <Description3>
          With NodeJS I can build REST API to connect the server with the client
          and Express makes faster to build applications because of his
          simplicity.
        </Description3>
        <Description2>MongoDB</Description2>
        <Description3>
          It is flexible when you try to scale your database.{" "}
        </Description3>
      </AboutMeWrapper>
    </Container>
  );
};

export default AboutMe;
