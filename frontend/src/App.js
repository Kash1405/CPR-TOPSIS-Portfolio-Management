import React from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Strategy from './pages/Strategy';

class App extends React.Component {
  render() {
    return (
      <div>
        <Strategy />
      </div >
    );
  }
}

export default App;
