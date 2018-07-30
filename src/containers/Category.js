import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';
import WhyUs from '../components/WhyUs/WhyUs';
import Filter from '../components/Filter/Filter';
import BookResult from '../components/Filter/BookResult';
import Footer from '../components/Footer/Footer';

class Category extends Component {
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
        <RecommendedBooks title={"Recommended Book For You"} />

        <WhyUs />
        <hr/>
        <Footer />
      </div>
    );
  }
}


export default Category;
