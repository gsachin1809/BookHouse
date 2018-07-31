import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Category from './containers/Category';
import ShowBook from './containers/ShowBook';
import { BrowserRouter as Router,Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <div>
              <Route path="/home" component={Home}/>
              <Route path="/category/:category_type" component={Category}/>
              <Route path="/book/:id" component={ShowBook}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
