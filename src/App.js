import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/About";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
