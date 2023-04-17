import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Strategy from './pages/Strategy';
import Portfolio from './pages/Portfolio';
import Company from './pages/Company';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Research from './pages/Research';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/strategy">
          <Strategy />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/research">
          <Research />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
