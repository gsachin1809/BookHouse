import React, { Component } from 'react';
import Book from '../Books/Book';

class RecommendedBooks extends Component {
  render() {
    var books = '';

    return (
      <section>
        <div className="">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>{ this.props.title }</h3>
              <div className="row">
                  {this.props.books.map((book, i) => {
                      return <div  key={i}><Book book={book} /></div>
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}


export default RecommendedBooks;
