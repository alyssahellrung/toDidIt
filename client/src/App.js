import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodids from "./components/CreateTodids";
import EditTodids from "./components/EditTodids";
import TodidsList from "./components/TodidsList";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://google.com" target="_blank">
          </a>
          <Link to="/" className="navbar-brand">ToDidIt!</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">ToDids</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Add</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={TodidsList} />
        <Route path="/edit/:id" component={EditTodids} />
        <Route path="/create" component={CreateTodids} />
      </div>
      </Router>
    );
  }
}

export default App;
