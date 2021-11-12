import React from "react";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Hero from "../components/Hero";
import MyWork from "../components/MyWork";
import Navbar from "../components/Navbar";
import { MainContainer } from "../components/shared/SharedComponents";

const Home = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
        <Hero />
        <AboutMe />
        <MyWork />
      </MainContainer>
      <ContactMe />
    </>
  );
};

export default Home;
