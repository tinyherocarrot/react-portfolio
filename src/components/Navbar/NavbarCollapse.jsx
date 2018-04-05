import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavbarCollapse = props => <Ul>{props.children}</Ul>;

export default NavbarCollapse;
