import React from "react";
import styled from "styled-components";
import {
  Container,
  SectionWrapper,
  SectionTitle,
} from "../shared/SharedComponents";
import { columnItems } from "../shared/styles";

const Description1 = styled.p`
  font-weight: 400;
  &::after {
    content: "";
    display: block;
    width: 100%;
    margin: 1em auto;
    height: 1px;
    background-color: white;
    border-radius: 20px;
  }
`;

const Description2 = styled.p`
  font-weight: 600;
`;

const Description3 = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.primaryColor700};
`;

const Descriptions = styled.div`
  @media ${({ theme }) => theme.desktopMediaQuery} {
    ${columnItems}
  }
`;
const DescriptionItem = styled.div`
  @media ${({ theme }) => theme.desktopMediaQuery} {
    max-width: 360px;
  }
`;
const AboutMe = () => {
  return (
    <Container>
      <SectionWrapper>
        <SectionTitle>About me</SectionTitle>
        <Description1>
          I'm interested in this technologies because:
        </Description1>

        <Descriptions>
          <DescriptionItem>
            <Description2>ReactJS:</Description2>
            <Description3>
              Is easy to create SPA applications, I like the fact that is
              component based, and the JSX syntax is like HTML with JavaScript.
            </Description3>
          </DescriptionItem>

          <DescriptionItem>
            <Description2>NodeJS & Express</Description2>
            <Description3>
              With NodeJS I can build REST API to connect the server with the
              client and Express makes faster to build applications because of
              his simplicity.
            </Description3>
          </DescriptionItem>

          <DescriptionItem>
            <Description2>MongoDB</Description2>
            <Description3>
              It is flexible when you try to scale your database.{" "}
            </Description3>
          </DescriptionItem>
        </Descriptions>
      </SectionWrapper>
    </Container>
  );
};

export default AboutMe;
