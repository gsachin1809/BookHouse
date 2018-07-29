import React, { Component } from 'react';
import Book from '../Books/Book';

class RecommendedBooks extends Component {
  render() {
    return (
      <section>
        <div className="">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>{ this.props.title }</h3>
              <div className="row">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}


export default RecommendedBooks;
