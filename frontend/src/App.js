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
import CompanyList from "./pages/CompanyList";
import Visualization from './pages/Visualization';
import RiskForm from "./pages/RiskForm";
import Result from './pages/Result'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/result'>
          <Result />
        </Route>
        <Route exact path='/riskform'>
          <RiskForm />
        </Route>
        <Route exact path='/company'>
          <CompanyList />
        </Route>
        <Route exact path='/visualization'>
          <Visualization />
        </Route>
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
        <Route exact path="/company/:ticker">
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
