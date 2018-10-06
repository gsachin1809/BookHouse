import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import RecommendedBooks from '../components/RecommendedBooks/RecommendedBooks';
import WhyUs from '../components/WhyUs/WhyUs';
import Footer from '../components/Footer/Footer';
import { recommendedBooks } from '../services/recommendedBooks'
import { mostSearchBooks } from '../services/mostSearchBooks'

class Home extends Component {
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

    //calling service for the mostly search books
    mostSearchBooks()
    .then(result => mostSearchBooks())
    .then(result => {
      if(result.code === 200){
        this.setState({
          is_loading: true,
          mostly_search_books : result.data
        })
      }else{
        this.setState({
          is_loading: true,
          error: result.data
        });
      }
    })
    .catch(err => console.log("this is error :" + err))

  }
  render() {
    return (
      <div className="App">
        <Banner />
        <RecommendedBooks title={"Recommended Book For You"} books={this.state.recommended_books} />
        <RecommendedBooks title={"Mostly Search Books"} books={this.state.mostly_search_books} />
        <WhyUs />
        <hr/>
        <Footer />
      </div>
    );
  }
}

Home.defaultProps = {
  recommended_books : [
    {
      "id" : 1,
      "name" : "The Outlander",
      "price" : "240.00",
      "image" : "the_outland.jpg"
    },
    {
      "id" : 2,
      "name" : "Pegasus Encyclopedia Ancient History - English",
      "price" : "240.00",
      "image" : "Pegasus.jpg"
    },
    {
      "id" : 3,
      "name" : "Life is What you Make It",
      "price" : "145.00",
      "image" : "life_is_what_you_make.jpg"
    },
    {
      "id" : 4,
      "name" : "I Contain Multitudes by Ed Yong",
      "price" : "145.00",
      "image" : "I Contain Multitudes by Ed Yong.png"
    },
    {
      "id" : 5,
      "name" : "The Undoing Project",
      "price" : "145.00",
      "image" : "The Undoing Project.png"
    },
    {
      "id" : 6,
      "name" : "Tool of Titans",
      "price" : "145.00",
      "image" : "Tool of Titans.png"
    },

  ],
  mostly_search_books : [
    {
      "name" : "The Outlander",
      "price" : "240.00",
      "image" : "the_outland.jpg"
    },
    {
      "name" : "Pegasus Encyclopedia Ancient History - English",
      "price" : "240.00",
      "image" : "1.jpeg"
    },
  ]
}

export default Home;
