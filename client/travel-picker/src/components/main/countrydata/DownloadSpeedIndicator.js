import React, { Component } from "react";

export default class DownloadSpeedIndicator extends Component {
  render() {
    let { downloadIndex } = this.props;
    console.log(downloadIndex);
    let amount;
    if (downloadIndex < 50) {
      amount = <div style={{ width: "10%" }} class="progress-bar bg-green" />;
    } else if (downloadIndex > 50 || downloadIndex < 100) {
      amount = <div style={{ width: "30%" }} class="progress-bar bg-blue" />;
    } else if (downloadIndex > 100 || downloadIndex < 150) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-yellow" />;
    } else if (downloadIndex > 150 || downloadIndex < 211) {
      amount = <div style={{ width: "60%" }} class="progress-bar bg-red" />;
    }

    return (
      <div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="admin-content analysis-progrebar-ctn res-mg-t-30">
            <h4 class="text-left text-uppercase">
              <b>Download Speed Index</b>
            </h4>
            <div class="row vertical-center-box vertical-center-box-tablet">
              <div class="text-left col-xs-3 mar-bot-15">
                {/* <label class="label bg-blue">
                  50% <i class="fa fa-level-up" aria-hidden="true" />
                </label> */}
              </div>
              <div class="col-xs-9 cus-gh-hd-pro">
                <h2 class="text-right no-margin">{downloadIndex}/210</h2>
              </div>
            </div>
            <div class="progress progress-mini">{amount}</div>
          </div>
        </div>
      </div>
    );
  }
}
