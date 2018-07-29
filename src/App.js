import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Category from './containers/Category';
import { BrowserRouter as Router,Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router >
          <Route path="/" component={Home}>
            <Route path="/category/:category" component={Category}>
            </Route>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
