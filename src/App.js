import React from 'react';
import logo from './logo.svg';
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/homepage" render={() => <Homepage />} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
