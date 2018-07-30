import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';
import WhyUs from '../components/WhyUs/WhyUs';
import Filter from '../components/Filter/Filter';
import BookDetails from '../components/Books/BookDetails';
import Footer from '../components/Footer/Footer';

class Category extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookDetails />  
        <RecommendedBooks title={"Recommended Book For You"} />
        <WhyUs />
        <hr/>
        <Footer />
      </div>
    );
  }
}


export default Category;
