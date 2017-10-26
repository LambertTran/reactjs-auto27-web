import React,{Component} from 'react';

export default class SaleContent extends Component{
  render(){
    return(
      <div className = "customer-page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="sale-detail">
                <ul>
                  <li>We'll buy your car even if you don't buy ours</li>
                  <li>Get your offer in as little as 30 minutes </li>
                  <li>Sell today and leave with payment in hand</li>
                  <li>Your offer for 7 days</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <h2>Call us at (916) 993-0999</h2>
              <h2>To get the best quote</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}