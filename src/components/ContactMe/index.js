import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../shared/SharedComponents";
import { ReactComponent as EmailIcon } from "../../img/mail.svg";
import { ReactComponent as GithubIcon } from "../../img/github.svg";
import { ReactComponent as PhoneIcon } from "../../img/phone-call.svg";

const Container = styled.div`
  color: black;
  width: 90%;
  background-color: #f2f2f2;
  border-radius: 8px;
  z-index: 2;
  position: absolute;
`;

const FormContainer = styled.div`
  width: 75%;
  margin: 0 auto;
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

// const Form = styled.form`
//   & > * {
//     margin-bottom: 15px;
//   }
// `;
const ContactForm = styled.div``;
// const InputText = styled.input`
//   margin-top: 10px;
//   padding: 0.5em;
//   border-radius: 8px;
//   outline: none;
//   border: 0.1px solid #8d8d8d;
//   background-color: white;
// `;

// const WrapperPrimaryButton = styled.div`
//   display: flex;
//   justify-content: center;
// `;
const ContactMe = () => {
  return (
    <Container>
      <FormContainer>
        <SectionTitle>Contact Info</SectionTitle>
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
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required />
            <input type="submit" value="Send" />
          </form>
        </ContactForm>
      </FormContainer>
    </Container>
  );
};

export default ContactMe;
