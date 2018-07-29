import React, { Component } from 'react';
import { Router , Route  } from 'react-router';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';
import WhyUs from '../components/WhyUs/WhyUs';
import Footer from '../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <RecommendedBooks title={"Recommended Book For You"}/>
        <RecommendedBooks title={"Mostly Search Books"}/>
        <WhyUs />
        <hr/>
        <Footer />
      </div>
    );
  }
}


export default Home;
