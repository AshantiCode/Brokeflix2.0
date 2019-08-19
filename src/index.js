import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Start from "./App";
import * as serviceWorker from "./serviceWorker";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/start" component={Start} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
