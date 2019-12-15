import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Category from "./containers/Category";
import State from "./containers/State";
import Use from "./containers/Use";
import Current from "./containers/Current";
import Where from "./containers/Where";
import Amount from "./containers/Amount";
import Contact from "./containers/Contact";
import Finished from "./containers/Finished";

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
