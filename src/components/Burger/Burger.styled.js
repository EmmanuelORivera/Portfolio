import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.primaryColor100};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      background: ${({ theme, open }) =>
        open ? theme.primaryColor800 : theme.primaryColor100};
    }

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
