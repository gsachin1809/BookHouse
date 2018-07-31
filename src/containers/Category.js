import React, { Component } from 'react';

import Header from '../components/Header/Header';
import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';
import WhyUs from '../components/WhyUs/WhyUs';
import Filter from '../components/Filter/Filter';
import BookResult from '../components/Filter/BookResult';
import Footer from '../components/Footer/Footer';
import { recommendedBooks } from '../services/recommendedBooks'

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      is_loading : false,
      recommended_books : [],
      mostly_search_books : [],

    }

  }

  componentDidMount() {
    //calling service for recommended books
    recommendedBooks()
    .then(result => recommendedBooks())
    .then(result => {
      if(result.code === 200){
        this.setState({
          is_loading: true,
          recommended_books: result.data
        });
      }else{
        this.setState({
          is_loading: true,
          error: result.data
        });
      }
    })
    .catch(err => console.log('There was an error:' + err))

    //call for the book for this category
    console.log(this.props.params);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
          <Filter />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-7 col-xs-12">
          <BookResult />
        </div>
        <RecommendedBooks title={"Recommended Book For You"} books={this.state.recommended_books} />

        <WhyUs />
        <hr/>
        <Footer />
      </div>
    );
  }
}


export default Category;
