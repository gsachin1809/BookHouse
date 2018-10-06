import React, { Component } from 'react';

import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';
import WhyUs from '../components/WhyUs/WhyUs';
import Filter from '../components/Filter/Filter';
import BookDetails from '../components/Books/BookDetails';
import Footer from '../components/Footer/Footer';

class Category extends Component {

  componentDidMount(){
    const { params , url } = this.props;
    console.log(params);
    console.log("url"+url);
    console.log(this.props.match.params);
  }

  render() {
    return (
      <div className="App">
        <BookDetails />

        <WhyUs />
        <hr/>
        <Footer />
      </div>
    );
  }
}


export default Category;
