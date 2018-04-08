import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
require("./stylesheets/main.scss");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
