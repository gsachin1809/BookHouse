import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Book extends Component {
  render() {
    return (
      <Link to="/book/1234">
        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <img src="/images/books/1.jpeg"  className="img-thumbnail" alt="" />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p className="book-title">Harry Potter </p>
                  <p> Rating : <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                  <p> Price : 250</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}


export default Book;
