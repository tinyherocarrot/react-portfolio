import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// VIEWS
import Home from "./views/Home";
import Detail from "./views/Detail";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/react-portfolio">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
