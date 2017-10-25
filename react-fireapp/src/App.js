import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {Administrator} from './containers/admin/administrator';
import {Jobs} from "./containers/jobs/jobs";
import {Reports} from "./containers/reports/reports";

const Links = () => (
  <nav>
    <Link className="navLink" to={{ pathname: "/jobs" }}>Jobs</Link>
    <Link className="navLink" to={{ pathname: "/reports" }}>Reports</Link>
    <Link className="navLink" to={{ pathname: "/admin" }}>Admin</Link>
    <hr />
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Control center</h1>
        </header>
        <Router>
          <div>
            <Links/>
            <Route exact path="/" component={Administrator} />
            <Route path="/admin" component={Administrator} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/reports" component={Reports} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
