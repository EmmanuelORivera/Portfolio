import React from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-scroll";

const Menu = ({ open, setOpen }) => {
  const handleClick = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <StyledMenu open={open}>
      <Link
        spy={true}
        smooth={true}
        duration={500}
        to="home"
        offset={-100}
        onClick={handleClick}
      >
        <span role="img" aria-label="home">
          &#9757;
        </span>
        Home
      </Link>
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        to="my-work"
        onClick={handleClick}
      >
        <span role="img" aria-label="my work">
          &#128119;
        </span>
        My work
      </Link>
      <Link
        spy={true}
        smooth={true}
        duration={500}
        to="contact-me"
        offset={-100}
        onClick={handleClick}
      >
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact me
      </Link>
    </StyledMenu>
  );
};

export default Menu;
