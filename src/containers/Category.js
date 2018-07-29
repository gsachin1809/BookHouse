import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';
import WhyUs from '../components/WhyUs/WhyUs';
import Footer from '../components/Footer/Footer';

class Category extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RecommendedBooks title={"Recommended Book For You"}/>
        <RecommendedBooks title={"Mostly Search Books"}/>
        <WhyUs />
        <hr/>
        <Footer />
      </div>
    );
  }
}


export default Category;
