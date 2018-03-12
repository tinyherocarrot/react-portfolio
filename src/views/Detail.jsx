import React, { Component } from "react";
import { Link } from "react-router-dom";

class Detail extends Component {
  render() {
    return (
      <div>
        <h1>Hello.</h1>
        <p>This is a detail page.</p>
        <Link to="/"> HOME </Link>
      </div>
    );
  }
}

export default Detail;
