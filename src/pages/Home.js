import React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  & > * {
    margin-bottom: 2.5em;
  }
  & > *:first-child {
    margin-bottom: 0;
  }
`;
const Home = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe />
    </Container>
  );
};

export default Home;
