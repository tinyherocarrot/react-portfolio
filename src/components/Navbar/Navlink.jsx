import React, { Component } from "react";

// const Li = styled.li`
//   margin: 0 1em;
//   text-transform: uppercase;

//   &:hover {
//     cursor: pointer
//     color: mediumseagreen
//   }
// `;

class Navlink extends Component {
  handleClick = () => {
    alert("you clicked on a navlink!");
  };

  render() {
    return (
      <li>
        <a onClick={this.handleClick}>{this.props.children}</a>
      </li>
    );
  }
}

export default Navlink;
