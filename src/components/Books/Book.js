import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Book extends Component {
  render() {

    return (
      <Link to={"/book/"+this.props.book.id}>
        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <img src={"/images/books/"+this.props.book.image}  className="img-thumbnail" alt="" />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p className="book-title">{this.props.book.name}</p>
                  <p> Rating : <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                  <p> Price : {this.props.book.price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}


export default Book;
