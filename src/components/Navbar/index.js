import React from "react";
import styled from "styled-components";
import { ReactComponent as HamburgerIcon } from "../../img/Hamburger-Menu.svg";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
`;
const LeftSide = styled.div``;
const RightSide = styled.div``;

const NavigationBar = styled.div``;
const NavigationBarList = styled.ul`
  display: flex;
  list-style-type: none;
  display: none;
`;
const NavigationBarItem = styled.li``;
const Navbar = () => {
  return (
    <Container>
      <LeftSide>Emmanuel Ochoa Rivera</LeftSide>
      <RightSide>
        <HamburgerIcon />
        <NavigationBar>
          <NavigationBarList>
            <NavigationBarItem>About Me</NavigationBarItem>
            <NavigationBarItem>My Work</NavigationBarItem>
            <NavigationBarItem>Contact Me</NavigationBarItem>
          </NavigationBarList>
        </NavigationBar>
      </RightSide>
    </Container>
  );
};

export default Navbar;
