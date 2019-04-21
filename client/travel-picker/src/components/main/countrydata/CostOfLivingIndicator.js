import React, { Component } from "react";

export default class CostOfLivingIndicator extends Component {
  render() {
    let { costOfLivingIndex } = this.props;
    console.log(this.props.costOfLivingIndex);
    let amount;
    if (costOfLivingIndex < 50) {
      amount = <div style={{ width: "10%" }} class="progress-bar bg-green" />;
    } else if (costOfLivingIndex > 50 || costOfLivingIndex < 100) {
      amount = <div style={{ width: "30%" }} class="progress-bar bg-blue" />;
    } else if (costOfLivingIndex > 100 || costOfLivingIndex < 150) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-yellow" />;
    } else if (costOfLivingIndex > 150 || costOfLivingIndex < 211) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-red" />;
    }

    // let amount;
    // if (costOfLivingIndex < 50) {
    //   amount = "10%";
    //   return amount;
    // } else if (costOfLivingIndex > 50 || costOfLivingIndex < 100) {
    //   amount = "30%";
    //   return amount;
    // } else if (costOfLivingIndex > 100 || costOfLivingIndex < 150) {
    //   amount = "60%";
    //   return amount;
    // } else if (costOfLivingIndex > 150) {
    //   amount = "90%";
    //   return amount;
    // }
    // console.log("amount " + amount);
    return (
      <div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="admin-content analysis-progrebar-ctn res-mg-t-15">
            <h4 class="text-left text-uppercase">
              <b>Cost Of Living Index</b>
            </h4>
            <div class="row vertical-center-box vertical-center-box-tablet">
              {/* <div class="col-xs-3 mar-bot-15 text-left">
                <label class="label bg-green">
                  30% <i class="fa fa-level-up" aria-hidden="true" />
                </label>
              </div> */}
              <div class="col-xs-9 cus-gh-hd-pro">
                <h2 class="text-right no-margin">{costOfLivingIndex}/210</h2>
              </div>
            </div>
            <div class="progress progress-mini">{amount}</div>
          </div>
        </div>
      </div>
    );
  }
}
