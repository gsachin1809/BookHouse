import React, { Component } from 'react';

class BookDetails extends Component {
  render() {
    return (
      <section>
          <div className="">
            <div className="panel panel-default">
              <div className="panel-body">
                <span>Harry Potter and the Philosopher's Stone</span>
                <span className="pull-right">
                  <button type="button" className="btn btn-warning" name="button"><i className="fa fa-heart" aria-hidden="true"></i> Add to Wishlist</button>
                  <button type="button" className="btn btn-warning" name="button"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</button>
                  <button type="button" className="btn btn-warning" name="button"><i className="fa fa-play" aria-hidden="true"></i> Buy Now</button>
                </span>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                          <img src="/images/books/1.jpeg"  className="img-thumbnail" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <p className="book-title">Harry Potter and the Philosopher's Stone </p>
                            <p>by J.K. Rowling  (Author)</p>
                            <p> Rating : <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                            <p> Price : 250</p>
                            <p>
                              <strong>Book Description :</strong>
                              <span>

                                Harry Potter and the Philosopher’s Stone is the first novel of the much appreciated Harry Potter series. An abridged version of the same novel, this book has been brought out by Bloomsbury Press for children aged between eight and twelve years.
                                <br />

                                The story unfolds with a letter arriving for Harry Potter, a simple boy, that brings with it a dark secret. The letter reveals to Harry Potter that both his parents were wizards and were killed by a Dark Lord’s curse when he was just a baby.
                                <br />

                                Thereafter Potter's journey to the Hogwarts, a school of wizards brimming with magic, mystery and enchantment, spins out into a fascinating tale. After his journey to Hogwarts, young Harry learns of a missing stone — a stone which can be both terrifying and valuable at the same time, depending on who possesses it and how one uses it. Will Harry Potter and his friends be able to get hold of the stone is how the story unfolds from here on?
                                <br />

                                It is here Harry Potter’s long journey spread over 7 books really begins. In simple words and rich prose, this children’s edition rightly captures the essence of the Harry Potter’s first novel and promises to take the children on an enchanting ride to the magical world order.
                                <br />
                              </span>
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}


export default BookDetails;
