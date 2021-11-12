import React from "react";
import styled from "styled-components";
import {
  Container,
  MainContainer,
  SectionWrapper,
} from "../shared/SharedComponents";
import { PrimaryButton, SectionTitle } from "../shared/SharedComponents";
import { ReactComponent as EmailIcon } from "../../img/mail.svg";
import { ReactComponent as GithubIcon } from "../../img/github.svg";
import { ReactComponent as PhoneIcon } from "../../img/phone-call.svg";

const LightContainer = styled(Container)`
  color: black;
  background-color: #f2f2f2;
  z-index: 2;
  position: relative;
`;

const ContactInfo = styled.div`
  &::after {
    content: "";
    display: block;
    width: 100%;
    margin: 1em auto;
    height: 1px;
    background-color: #aaa;
    border-radius: 20px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  align-items: center;
`;

const Form = styled.form``;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5em;
`;
const ContactForm = styled.div``;
const InputText = styled.input`
  margin-top: 10px;
  padding: 0.5em;
  border-radius: 8px;
  outline: none;
  border: 0.1px solid #8d8d8d;
  background-color: white;
`;
const TextArea = styled.textarea`
  height: 150px;
  resize: none;
  margin-top: 10px;
  padding: 0.5em;
  border-radius: 8px;
  outline: none;
  border: 0.1px solid #8d8d8d;
  background-color: white;
`;
const SendButton = styled(PrimaryButton)`
  align-self: center;
`;

const PinkBackground = styled.div`
  background-color: #b5266b;
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
          <SectionWrapper>
            <SectionTitle>My Info</SectionTitle>
            <ContactInfo>
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
                <p>https://github.com/EmmanuelORivera</p>
              </ContactWrapper>
              <ContactWrapper>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                <p>+52-639-101-71-86</p>
              </ContactWrapper>
            </ContactInfo>
            <ContactForm>
              <SectionTitle>Contact me</SectionTitle>
              <Form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <InputWrapper>
                  <label>Your Name:</label>
                  <InputText type="text" name="name" />
                  <label>Your Email:</label>
                  <InputText type="email" name="email" />
                  <label>Message: </label>
                  <TextArea name="message"></TextArea>
                  <SendButton type="submit">Send</SendButton>
                </InputWrapper>
              </Form>
            </ContactForm>
          </SectionWrapper>
        </LightContainer>
      </MainContainer>
    </>
  );
};

export default ContactMe;
