import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <div>
        <style>

        </style>
          <header>
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <Link to="/">
                        <span className="navbar-brand">Book House</span>
                     </Link>
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <ul className="nav navbar-nav">
                          <li className="category">
                            <div className="dropdown">
                              <span className="category-option dropdown-toggle" data-toggle="dropdown">Category
                              <span className="caret"></span></span>
                              <ul className="dropdown-menu">
                                <li><Link to="/category/advance"> Advance</Link>  </li>
                                <li><Link to="/category/science-fiction"> Science Fiction</Link>  </li>
                                <li><Link to="/category/horror"> Horror</Link>  </li>

                              </ul>
                            </div>
                          </li>

                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <div className="row form-group form-group-lg">
                            <input className="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Books, Author and more" name="" />
                            <button className="flipkart-navbar-button col-xs-1">
                                <svg width="15px" height="15px">
                                    <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                                </svg>
                            </button>
                        </div>
                    </div>


                    <ul className="nav navbar-nav navbar-right">
                      <li> <i className="fa fa-shopping-cart"></i> Cart</li>

                    </ul>
                  </div>




                </div>
              </nav>
            </header>
      </div>

    );
  }
}


export default Header;
