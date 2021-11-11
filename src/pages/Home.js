import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Home = () => {
  return (
    <Container>
      <Navbar></Navbar>
    </Container>
  );
};

export default Home;
