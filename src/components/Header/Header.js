import React, { Component } from 'react';
import { Router , Route } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                 <span className="navbar-brand">Book House</span>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li>Adventure</li>
                  <li>Science Fiction</li>
                  <li>Horror</li>
                  <li>History</li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><span className="glyphicon glyphicon-user"></span> Sign Up</li>
                  <li><span className="glyphicon glyphicon-log-in"></span> Login</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    );
  }
}


export default Header;
