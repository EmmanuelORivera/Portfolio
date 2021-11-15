import React from "react";
import styled from "styled-components";
import {
  Container,
  MainContainer,
  SectionWrapper,
} from "../shared/SharedComponents";
import { SectionTitle } from "../shared/SharedComponents";
import { ReactComponent as EmailIcon } from "../../img/mail.svg";
import { ReactComponent as GithubIcon } from "../../img/github.svg";
import { ReactComponent as PhoneIcon } from "../../img/phone-call.svg";
import { basePrimaryButton } from "../shared/styles";

const LightContainer = styled(Container)`
  color: black;
  background-color: ${({ theme }) => theme.primaryColor200};
  z-index: 2;
  position: relative;
`;

const ContactSection = styled(SectionWrapper)`
  @media ${({ theme }) => theme.desktopMediaQuery} {
    display: flex;
  }
`;
const LeftSide = styled.div`
  &::after {
    content: "";
    display: block;
    width: 100%;
    margin: 1em auto;
    height: 1px;
    background-color: ${({ theme }) => theme.primaryColor300};
    border-radius: 20px;
  }
  @media ${({ theme }) => theme.desktopMediaQuery} {
    & {
      flex-grow: 1;
    }
    &::after {
      display: none;
    }
  }
`;

const RightSide = styled.div`
  @media ${({ theme }) => theme.desktopMediaQuery} {
    & {
      max-width: 800px;
      padding: 0 2em;
      flex-grow: 2;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
const IconWrapper = styled.div`
  height: 24px;
  width: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5em;

  input,
  textarea {
    font-size: 0.7rem;
    margin-top: 10px;
    padding: 1em;
    border-radius: 8px;
    outline: none;
    border: 0.1px solid ${({ theme }) => theme.borderColor800};
    background-color: white;
  }
`;
const TextArea = styled.textarea`
  height: 150px;
  resize: none;
`;
const SendButton = styled.button`
  ${basePrimaryButton}
  align-self: center;
`;

const PinkBackground = styled.div`
  background-color: ${({ theme }) => theme.primaryButtonColor};
  height: 400px;
  width: 100%;
  clip-path: polygon(0 100%, 100% 55%, 100% 0, 82% 26%, 0 0);
  position: absolute;
  z-index: 1;
`;
const ContactMe = () => {
  return (
    <>
      <PinkBackground />
      <MainContainer style={{ marginBottom: "2em" }}>
        <LightContainer>
          <ContactSection>
            <LeftSide>
              <SectionTitle id="contact-me">Info</SectionTitle>
              <ContactWrapper>
                <IconWrapper>
                  <EmailIcon />
                </IconWrapper>
                <p>eorivera95@gmail.com</p>
              </ContactWrapper>
              <ContactWrapper>
                <IconWrapper>
                  <GithubIcon />
                </IconWrapper>
                <p>
                  https://github.com/
                  <span style={{ display: "block" }}>EmmanuelORivera</span>
                </p>
              </ContactWrapper>
              <ContactWrapper>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                <p>+52-639-101-71-86</p>
              </ContactWrapper>
            </LeftSide>

            <RightSide>
              <SectionTitle>Contact me</SectionTitle>
              <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <InputWrapper>
                  <label>Your Name:</label>
                  <input type="text" name="name" />
                  <label>Your Email:</label>
                  <input type="email" name="email" />
                  <label>Message: </label>
                  <TextArea name="message"></TextArea>
                  <SendButton type="submit">Send</SendButton>
                </InputWrapper>
              </form>
            </RightSide>
          </ContactSection>
        </LightContainer>
      </MainContainer>
    </>
  );
};

export default ContactMe;
