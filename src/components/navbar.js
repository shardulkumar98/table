import React from "react";
import { Nav, Logo, Ul, Li, A, Input } from "../styles/components/navbar";

const Navbar = () => (
  <Nav>
    <Logo>Logo here</Logo>
    <Ul>
      <Li>
        <A href="/dashboard">Home</A>
      </Li>
      <Li>
        <A href="">About</A>
      </Li>
      <Li>
        <A href="">Contact</A>
      </Li>
    </Ul>

    <Input type="text" placeholder="Google Search" />
  </Nav>
);

export default Navbar;
