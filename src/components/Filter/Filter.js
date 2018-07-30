import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="">
        <strong>Books</strong>
        <ul>
          <li>Personal Development & Self-Help</li>
          <li>Contemporary Fiction</li>
          <li>Indian Writing</li>
          <li>Romance</li>
          <li>Biographies & Autobiographies</li>
          <li>Business, Strategy & Management</li>
          <li>Mind, Body & Spirit</li>
          <li>Historical Fiction</li>
          <li>Fantasy</li>
        </ul>
        <small> Show more</small>
        <div className="">
          <strong>Price</strong>
          <ul>
            <li>Under ₹100</li>
            <li>₹100 - ₹200</li>
            <li>₹200 - ₹500</li>
            <li>₹500 - ₹1,000</li>
            <li>Over ₹1,000</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Filter;
