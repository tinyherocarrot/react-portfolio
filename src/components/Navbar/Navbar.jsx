import React from "react";
import styled from "styled-components";

import NavbarBrand from "./NavbarBrand";
import Navlink from "./Navlink";
import NavbarCollapse from "./NavbarCollapse";

const MyNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: papayawhip;
`;

const Navbar = () => {
  return (
    <MyNav>
      <NavbarBrand />
      <NavbarCollapse>
        <Navlink>Web Dev</Navlink>
        <Navlink>Skills</Navlink>
        <Navlink>Contact</Navlink>
      </NavbarCollapse>
    </MyNav>
  );
};

export default Navbar;
