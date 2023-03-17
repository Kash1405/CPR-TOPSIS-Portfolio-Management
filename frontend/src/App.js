import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Strategy from './pages/Strategy';
import Company from './pages/Company'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/strategy">
          <Strategy />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
