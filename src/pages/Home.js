import React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Hero from "../components/Hero";
import MyWork from "../components/MyWork";
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
const PinkBackground = styled.div`
  background-color: #b5266b;
  height: 400px;
  width: 100%;
  clip-path: polygon(0 100%, 100% 55%, 100% 0, 82% 26%, 0 0);
  position: absolute;
  z-index: 1;
`;
const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <AboutMe />
        <MyWork />
        <ContactMe />
      </Container>
      <PinkBackground />
    </>
  );
};

export default Home;
