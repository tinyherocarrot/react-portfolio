import React from "react";
import { Link } from "react-router-dom";

const MyLink = styled(Link)`
  color: black;
  text-decoration: none;
  border-bottom: 1px solid black;
  transition: all 0.35s ease;

  &:hover {
    color: darkgrey;
    border-bottom: 1px solid darkgrey;
  }
`;

export const StyledLink = props => {
  return <MyLink {...props}>{props.children}</MyLink>;
};
