import { css } from "styled-components";

export const basePrimaryButton = css`
  flex-basis: 2;
  cursor: pointer;
  background-color: #b5266b;
  border: none;
  color: white;
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  border-radius: 12px;
  transition: all ease 0.3s;
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: #821b4c;
  }
`;

export const columnItems = css`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
