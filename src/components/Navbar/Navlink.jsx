import React, { Component } from "react";
import styled from "styled-components";

const Li = styled.li`
  margin: 0 1em;
  text-transform: uppercase;

  &:hover {
    cursor: pointer
    color: mediumseagreen
  }
`;

class Navlink extends Component {
  handleClick = () => {
    alert("you clicked on a navlink!");
  };

  render() {
    return (
      <Li>
        <a onClick={this.handleClick}>{this.props.children}</a>
      </Li>
    );
  }
}

export default Navlink;
