import React, { Component } from "react";

export default class CrimeIndicator extends Component {
  render() {
    let { crimeIndex } = this.props;
    let amount;
    if (crimeIndex < 50) {
      amount = <div style={{ width: "10%" }} class="progress-bar bg-green" />;
    } else if (crimeIndex > 50 || crimeIndex < 100) {
      amount = <div style={{ width: "30%" }} class="progress-bar bg-blue" />;
    } else if (crimeIndex > 100 || crimeIndex < 150) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-yellow" />;
    } else if (crimeIndex > 150 || crimeIndex < 211) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-red" />;
    }
    return (
      <div>
        <div
          class="col-lg-3 col-md-3 col-sm-3 col-xs-12"
          style={{ marginBottom: "1px" }}
        >
          <div class="admin-content analysis-progrebar-ctn res-mg-t-30">
            <h4 class="text-left text-uppercase">
              <b>Crime Index</b>
            </h4>
            <div class="row vertical-center-box vertical-center-box-tablet">
              <div class="text-left col-xs-3 mar-bot-15">
                {/* <label class="label bg-red">
                  15% <i class="fa fa-level-down" aria-hidden="true" />
                </label> */}
              </div>
              <div class="col-xs-9 cus-gh-hd-pro">
                <h2 class="text-right no-margin">{crimeIndex}/210</h2>
              </div>
            </div>
            <div class="progress progress-mini">{amount}</div>
          </div>
        </div>
      </div>
    );
  }
}
