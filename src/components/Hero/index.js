import React from "react";
import styled from "styled-components";
import { ReactComponent as MERN } from "../../img/MERN-Mobile.svg";
import profile from "../../img/profile.jpeg";

const Container = styled.div``;
const LeftSide = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 1.31rem;
  font-weight: 600;
  text-transform: uppercase;
`;
const Span = styled.span`
  display: block;
`;
const SubTitle = styled.p`
  letter-spacing: 3px;
  margin-bottom: 1.5em;
  &::before {
    content: "";
    display: block;
    max-width: 15em;
    margin: 0 auto 1em;
    height: 1px;
    background-color: white;
    border-radius: 20px;
  }
`;

const ProfileImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 8rem;
  width: 7rem;
  margin: 0 auto 1.5em;
`;
const ProfileImage = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
const RightSide = styled.div``;
const ButtonsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const PrimaryButton = styled.button`
  flex-basis: 2;
  cursor: pointer;
  background-color: #b5266b;
  border: none;
  color: white;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 12px;
  transition: all ease 0.3s;
  &:hover,
  &:focus {
    background-color: #821b4c;
  }
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: #434653;
  &:hover,
  &:focus {
    background-color: #2e3039;
  }
`;
const Hero = () => {
  return (
    <Container>
      <LeftSide>
        <Title>
          Mern stack web <Span>developer</Span>
        </Title>
        <SubTitle>Bringing Ideas To Life</SubTitle>
        <ProfileImageContainer>
          <ProfileImage
            src={profile}
            alt="This is my profile image"
          ></ProfileImage>
        </ProfileImageContainer>
        <MERN />
      </LeftSide>
      <RightSide></RightSide>
      <ButtonsContainer>
        <PrimaryButton>Contact me</PrimaryButton>
        <SecondaryButton>Check my work</SecondaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Hero;
