import React, { useState } from "react";
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
import BackOffice from "./containers/BackOffice/index";
import Test from "./containers/test";

const App = () => {
  // State which recovers all the data entered
  const [isSelected, setIsSelected] = useState([]);

  console.log("App isSelected=>", isSelected);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Category isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/State">
          <State isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/Use">
          <Use isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/Current">
          <Current isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/Where">
          <Where isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/Amount">
          <Amount isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/Contact">
          <Contact isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/Finished">
          <Finished isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
        <Route path="/BackOffice">
          <BackOffice isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>

        {/* Route for testing code, only accessible by url*/}
        <Route path="/Test">
          <Test isSelected={isSelected} setIsSelected={setIsSelected} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
