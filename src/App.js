import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Detail from "./views/Detail";
import Landing from "./views/Landing";
import Navbar from "./components/Navbar";
import { PageContainer } from "./components/Containers";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/detail" component={Detail} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
