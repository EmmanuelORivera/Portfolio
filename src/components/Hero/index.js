import React from "react";
import styled from "styled-components";
import { ReactComponent as MERN } from "../../img/MERN-Mobile.svg";
import profile from "../../img/profile.jpeg";
import { basePrimaryButton } from "../shared/SharedComponents";
import { Link } from "react-scroll";

const Container = styled.div`
  margin: 2em 0;
`;
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
  margin: 2em 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const PrimaryButton = styled(Link)`
  ${basePrimaryButton}
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.secondaryButtonColor};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryButtonHoverColor};
  }
`;
const SecondaryLink = styled(SecondaryButton, Link)``;
const Hero = () => {
  return (
    <Container id="home">
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
        <PrimaryButton
          activeClass="active"
          to="contact-me"
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
        >
          Contact me
        </PrimaryButton>
        <SecondaryLink
          activeClass="active"
          to="my-work"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          Check my work
        </SecondaryLink>
      </ButtonsContainer>
    </Container>
  );
};

export default Hero;
