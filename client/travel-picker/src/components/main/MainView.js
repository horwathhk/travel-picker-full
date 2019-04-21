import React, { Component } from "react";
import HeaderTopArea from "./headertoparea/HeaderTopArea";
import Breadcome from "./headertoparea/Breadcome";
import TopNewsView from "./topnews/TopNewsView";
import CountryDataView from "./countrydata/CountryDataView";
import TourismIndicator from "./countrydata/TourismIndicator";
import DayInTheLifeView from "./dayinthelife/DayInTheLifeView";
import AboutView from "./about/AboutView";
import TopArticlesView from "./toparticles/TopArticlesView";
import TopMusicView from "./topmusic/TopMusicView";
import TopCities from "./topcities/TopCities";
import CityModalView from "./citymodal/CityModalView";
import Spinner from "../../img/spinner.gif";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CountryEconomicView from "./countryEconomics/CountryEconomicView";

let tourismIndex;

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourismIndex: null,
      modalOpen: null,
      modal: false,
      countryName: null,
      cityName: "",
      isLoaded: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate = prevProps => {
    if (this.props.isLoaded !== prevProps.isLoaded) {
      this.setState({ isloaded: this.props.isLoaded });
    }
  };
  //this is causing an infinite loop
  getTourismIndex = index => {
    if (index != this.state.tourismIndex) {
      // console.log("main vieew tourism index " + index);
      this.setState({ tourismIndex: index });
    }
  };

  getModalOpen = (status, cityName) => {
    let { modalOpen } = this.state;
    this.setState({ modalOpen: status, cityName: cityName }, function() {
      console.log("main view this.state.modalOpen " + this.state.modalOpen);
      console.log("main view this.state.cityName " + this.state.cityName);
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    let { modalOpen, isLoaded } = this.state;
    let modal;
    console.log(this.props);
    if (this.props.countryName === "") {
      return (
        <div class="row" style={{ marginTop: "20%" }}>
          <div class="col align-self-center">
            <div
              class="alert"
              role="alert"
              style={{
                background: "linear-gradient(-45deg, #23A6D5, #23D5AB)"
              }}
            >
              <h4 class="widget-text-box">Welcome to Travel Picker!</h4>
              <p className="widget-text-box">
                In the nav bar on the left side of the screen, filter through
                countries using by toggling the values on the criteria you care
                about. When you see a country you are interested in, click the
                image to display tons of cool information about that country
                from Top Cities to whats trendy on the local music charts.
              </p>
            </div>
          </div>
        </div>
      );
      // } else if (!isLoaded) {
      //   return (
      //     <div style={{ color: "white" }} className="text-center">
      //       Loading...
      //     </div>
      //   );
    } else {
      return (
        <div>
          <AboutView countryName={this.props.countryName} />
          <TopCities
            countryName={this.props.countryName}
            getModalOpen={this.getModalOpen}
          />
          <TopNewsView countryName={this.props.countryName} />
          <TopArticlesView countryName={this.props.countryName} />
          <CountryDataView
            countryName={this.props.countryName}
            countryId={this.props.countryId}
            sendTourismIndex={this.getTourismIndex}
          />
          <CityModalView modalOpen={modalOpen} cityName={this.state.cityName} />
          {/* <CountryEconomicView countryName={this.props.countryName} /> */}
          {/* <div class="traffic-analysis-area">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="white-box tranffic-als-inner">
                    <h3 class="box-title">
                      <small class="pull-right m-t-10 text-success last-month-sc cl-one">
                        <i class="fa fa-sort-asc" /> 18% last month
                      </small>{" "}
                      Site Traffic
                    </h3>
                    <div class="stats-row">
                      <div class="stat-item">
                        <h6>Overall Growth</h6>
                        <b>80.40%</b>
                      </div>
                      <div class="stat-item">
                        <h6>Montly</h6>
                        <b>15.40%</b>
                      </div>
                      <div class="stat-item">
                        <h6>Day</h6>
                        <b>5.50%</b>
                      </div>
                    </div>
                    <div id="sparkline8" />
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="white-box tranffic-als-inner res-mg-t-30">
                    <h3 class="box-title">
                      <small class="pull-right m-t-10 text-danger last-month-sc cl-two">
                        <i class="fa fa-sort-desc" /> 18% last month
                      </small>
                      Site Traffic
                    </h3>
                    <div class="stats-row">
                      <div class="stat-item">
                        <h6>Overall Growth</h6>
                        <b>80.40%</b>
                      </div>
                      <div class="stat-item">
                        <h6>Montly</h6>
                        <b>15.40%</b>
                      </div>
                      <div class="stat-item">
                        <h6>Day</h6>
                        <b>5.50%</b>
                      </div>
                    </div>
                    <div id="sparkline9" />
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="white-box tranffic-als-inner res-mg-t-30">
                    <h3 class="box-title">
                      <small class="pull-right m-t-10 text-success last-month-sc cl-three">
                        <i class="fa fa-sort-asc" /> 18% last month
                      </small>
                      Site Traffic
                    </h3>
                    <div class="stats-row">
                      <div class="stat-item">
                        <h6>Overall Growth</h6>
                        <b>80.40%</b>
                      </div>
                      <div class="stat-item">
                        <h6>Montly</h6>
                        <b>15.40%</b>
                      </div>
                      <div class="stat-item">
                        <h6>Day</h6>
                        <b>5.50%</b>
                      </div>
                    </div>
                    <div id="sparkline10" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <DayInTheLifeView countryName={this.props.countryName} /> */}
          <TopMusicView countryName={this.props.countryName} />
          {/* <div class="calender-area mg-tb-30">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="calender-inner">
                    <div id="calendar" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div class="footer-copyright-area">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="footer-copy-right">
                    <p>
                      Copyright © 2018{" "}
                      <a href="https://colorlib.com/wp/templates/">Colorlib</a>{" "}
                      All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
