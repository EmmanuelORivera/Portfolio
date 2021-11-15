import styled from "styled-components";

export const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  & > * {
    margin-bottom: 2.5em;
  }
  & > *:first-child {
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  background-color: #2e3039;
  border-radius: 8px;
`;
export const SectionTitle = styled.h2`
  font-size: 1.31rem;
  font-weight: 500;
  text-align: center;
`;
export const SectionWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 1em;
`;
