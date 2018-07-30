import React, { Component } from 'react';

class BookResult extends Component {
  render() {
    return (
      <div className="">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Search Result</h3>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="">
                    <div className="">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img src="/images/books/1.jpeg"  className="img-thumbnail" alt=""/>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                          <p className="book-title">Harry Potter </p>
                          <p> Rating : <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                          <p> Price : 250</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <hr/>
                </div>
                <div className="book-item col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="">
                    <div className="">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img src="/images/books/2.jpg"  className="img-thumbnail" alt=""/>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                          <p className="book-title">Harry Potter </p>
                          <p> Rating : <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                          <p> Price : 250</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <hr/>
                </div>


              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default BookResult;
