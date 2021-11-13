import React, { useRef, useState } from "react";
import styled from "styled-components";
import Burger from "../Burger";
import Menu from "../Menu";
import { useOnClickOutside } from "../../hooks";

const StickyContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.primaryColor800};
`;
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2em 0;
  width: 90%;
  margin: 0 auto;
`;
const LeftSide = styled.div``;
const RightSide = styled.div``;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <StickyContainer>
      <NavbarWrapper>
        <LeftSide>Emmanuel Ochoa Rivera</LeftSide>
        <RightSide>
          <div ref={node}>
            <Menu open={open} setOpen={setOpen}></Menu>
            <Burger open={open} setOpen={setOpen}></Burger>
          </div>
        </RightSide>
      </NavbarWrapper>
    </StickyContainer>
  );
};

export default Navbar;
