import React from "react";
import styled from "styled-components";
import MernImage from "../../img/mern.png";
import profile from "../../img/profile.jpeg";
import { SectionWrapper } from "../shared/SharedComponents";
import { Link } from "react-scroll";
import { basePrimaryButton } from "../shared/styles";

const Container = styled.div`
  margin: 2em 0;
`;
const HeroWrapper = styled.div`
  @media ${({ theme }) => theme.mobileMediaQuery} {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const LeftSide = styled.div`
  text-align: center;
  @media ${({ theme }) => theme.mobileMediaQuery} {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-grow: 1/2;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.titleFontSize};
  font-weight: 600;
  text-transform: uppercase;
`;
const Span = styled.span`
  display: block;
`;
const SubTitle = styled.p`
  font-size: 0.833rem;
  letter-spacing: 3px;
  &::before {
    content: "";
    display: block;
    max-width: 15em;
    margin: 0 auto 2em;
    height: 1px;
    background-color: white;
    border-radius: 20px;
  }
  @media ${({ theme }) => theme.mobileMediaQuery} {
    & {
      position: relative;
    }
    &::before {
      position: absolute;
      top: -1em;
      width: 100%;
    }
  }
`;

const ProfileImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 8rem;
  width: 7rem;
  margin: 1.5em auto;
  @media ${({ theme }) => theme.mobileMediaQuery} {
    height: 10rem;
    width: 9rem;
  }
`;
const ProfileImage = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
const RightSide = styled.div`
  flex-grow: 1;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.8em;
  margin: 2.5em auto;
  max-width: 250px;
  @media ${({ theme }) => theme.mobileMediaQuery} {
    flex-direction: row;
    max-width: none;
    gap: 5%;
  }
`;

const PrimaryButton = styled(Link)`
  ${basePrimaryButton}

  @media ${({ theme }) => theme.mobileMediaQuery} {
    width: 15em;
  }
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.secondaryButtonColor};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryButtonHoverColor};
  }
`;
const SecondaryLink = styled(SecondaryButton, Link)``;

const MernImages = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;
const Hero = () => {
  return (
    <Container id="home">
      <SectionWrapper>
        <HeroWrapper>
          <LeftSide>
            <Title>
              Mern stack web <Span>developer</Span>
            </Title>
            <SubTitle>Bringing Ideas To Life</SubTitle>
            <div style={{ width: "100%" }}>
              <MernImages src={MernImage} alt="icons" />
            </div>
          </LeftSide>
          <RightSide>
            <ProfileImageContainer>
              <ProfileImage
                src={profile}
                alt="This is my profile image"
              ></ProfileImage>
            </ProfileImageContainer>
          </RightSide>
        </HeroWrapper>
        <ButtonsContainer>
          <PrimaryButton
            activeClass="active"
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact me
          </PrimaryButton>
          <SecondaryLink
            activeClass="active"
            to="my-work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Check my work
          </SecondaryLink>
        </ButtonsContainer>
      </SectionWrapper>
    </Container>
  );
};

export default Hero;
