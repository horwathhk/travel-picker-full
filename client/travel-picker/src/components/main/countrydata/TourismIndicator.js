import React, { Component } from "react";

export default class TourismIndicator extends Component {
  render() {
    let { tourismIndex } = this.props;
    console.log(tourismIndex);
    let amount;
    if (tourismIndex < 50) {
      amount = <div style={{ width: "10%" }} class="progress-bar bg-green" />;
    } else if (tourismIndex > 50 || tourismIndex < 100) {
      amount = <div style={{ width: "30%" }} class="progress-bar bg-blue" />;
    } else if (tourismIndex > 100 || tourismIndex < 150) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-yellow" />;
    } else if (tourismIndex > 150 || tourismIndex < 211) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-red" />;
    }
    return (
      <div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="admin-content analysis-progrebar-ctn res-mg-t-30">
            <h4 class="text-left text-uppercase">
              <b>Tourism Index</b>
            </h4>
            <div class="row vertical-center-box vertical-center-box-tablet">
              <div class="text-left col-xs-3 mar-bot-15">
                {/* <label class="label bg-purple">
                  80% <i class="fa fa-level-up" aria-hidden="true" />
                </label> */}
              </div>
              <div class="col-xs-9 cus-gh-hd-pro">
                <h2 class="text-right no-margin">{tourismIndex}/210</h2>
              </div>
            </div>
            <div class="progress progress-mini">{amount}</div>
          </div>
        </div>
      </div>
    );
  }
}
