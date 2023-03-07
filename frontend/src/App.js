import React from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Strategy from './pages/Strategy';
import Company from './pages/Company'

class App extends React.Component {
  render() {
    return (
      <div>
        <Company />
      </div >
    );
  }
}

export default App;
