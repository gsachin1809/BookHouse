import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <section>
          <footer>
            <div className="container">
              <div className="footer">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <h3>Contact US</h3>
                  <ul>
                    <li> Monday to Saturday</li>
                    <li> 9:00 AM to 9:00 PM</li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <h3>Books</h3>
                  <ul>
                    <li> Science Fiction</li>
                    <li> Action and Adventure</li>
                    <li> Travel</li>
                    <li> Art</li>
                    <li> Self Help</li>
                  </ul>
                </div>
              </div>
            </div>

          </footer>
      </section>
    );
  }
}


export default Footer;
