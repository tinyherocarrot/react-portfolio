import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>AYY WHAT UP</h1>
        <p>This is the homepage</p>
        <Link to="/detail"> detail </Link>
      </div>
    );
  }
}

export default Home;
