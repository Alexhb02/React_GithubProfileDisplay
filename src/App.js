import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header.js";
import Home from "./Home.js";
import About from "./About.js";
import Project from "./Project.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div class="backgroundMain">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
