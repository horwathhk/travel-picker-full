import React, { Component } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import Image from "../../../img/france.jpg";

export default class CountryOverview extends Component {
  render() {
    // console.log(this.props.locationOverview);
    const locationOverview = this.props.locationOverview;
    return (
      <div class="author-area-pro">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="personal-info-wrap">
                <img
                  src={this.props.featureImage}
                  alt=""
                  style={{ width: "100%" }}
                />
                <div class="widget-text-box">
                  <h4>{this.props.countryName}</h4>
                  <p>{ReactHtmlParser(locationOverview)}</p>
                  <div class="text-right like-love-list">
                    <a class="btn btn-xs btn-white">
                      <i class="fa fa-thumbs-up" /> Like{" "}
                    </a>
                    <a class="btn btn-xs btn-primary">
                      <i class="fa fa-heart" /> Love
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
