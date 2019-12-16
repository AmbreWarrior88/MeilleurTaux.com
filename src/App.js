import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index";
import Category from "./containers/Category/index";
import State from "./containers/State/index";
import Use from "./containers/Use/index";
import Current from "./containers/Current/index";
import Where from "./containers/Where/index";
import Amount from "./containers/Amount/index";
import Contact from "./containers/Contact/index";
import Finished from "./containers/Finished/index";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Category />
        </Route>
        <Route path="/State">
          <State />
        </Route>
        <Route path="/Use">
          <Use />
        </Route>
        <Route path="/Current">
          <Current />
        </Route>
        <Route path="/Where">
          <Where />
        </Route>
        <Route path="/Amount">
          <Amount />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Finished">
          <Finished />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
