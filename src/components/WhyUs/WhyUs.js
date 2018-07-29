import React, { Component } from 'react';

class WhyUs extends Component {
  render() {
    return (
      <section>
            <div className="why-us row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <span className="heading"> Why Us </span>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <img src="\images/index/clock.png"  alt="" className="img-responsive" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <p> On Time Delivery</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <img src="\images/index/offers.png"  alt="" className="img-responsive" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <p> Best Offers</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <img src="\images/index/return.png"  alt="" className="img-responsive" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <p> Return Policy</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <img src="\images/index/price.png"  alt="" className="img-responsive" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <p> Affordable Price</p>
                </div>
              </div>
            </div>

          </section>
    );
  }
}


export default WhyUs;
