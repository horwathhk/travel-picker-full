import React, { Component } from "react";
import EconomicChartComponent from "./EconomicChartComponent";

export default class CountryEconomicView extends Component {
  render() {
    return (
      <div>
        <div class="product-sales-area mg-tb-30">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="product-sales-chart">
                  <div class="portlet-title">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="caption pro-sl-hd">
                          <span class="caption-subject text-uppercase">
                            <b>Economic something? *Country*</b>
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="actions graph-rp">
                          <div class="btn-group" data-toggle="buttons">
                            <label class="btn btn-grey active">
                              <input
                                type="radio"
                                name="options"
                                class="toggle"
                                id="option1"
                                checked=""
                              />
                              Today
                            </label>
                            <label class="btn btn-grey">
                              <input
                                type="radio"
                                name="options"
                                class="toggle"
                                id="option2"
                              />
                              Week
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="curved-line-chart"
                    class="flot-chart-sts flot-chart curved-chart-statistic"
                  />
                  <EconomicChartComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
