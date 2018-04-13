import React from "react";

import NavbarBrand from "./NavbarBrand";
import Navlink from "./Navlink";
import NavbarCollapse from "./NavbarCollapse";

// const MyNav = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   background: papayawhip;
// `;

const Navbar = () => {
  return (
    <nav>
      <NavbarBrand />
      <NavbarCollapse>
        <Navlink>Web Dev</Navlink>
        <Navlink>Skills</Navlink>
        <Navlink>Contact</Navlink>
      </NavbarCollapse>
    </nav>
  );
};

export default Navbar;
