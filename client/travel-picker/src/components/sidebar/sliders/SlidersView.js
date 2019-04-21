import React, { Component } from "react";
import CostOfLivingSlider from "./allSliders/CostOfLivingSlider";
import DownloadSpeedSlider from "./allSliders/DownloadSpeedSlider";
import CrimeSlider from "./allSliders/CrimeSlider";
import SafetySlider from "./allSliders/SafetySlider";
import TourismSlider from "./allSliders/TourismSlider";

export default class SlidersView extends Component {
  sendCostOfLivingIndex = costOfLivingIndex => {
    console.log(costOfLivingIndex);
    this.props.getCostOfLivingIndexValueInSideBarMain(costOfLivingIndex);
  };

  sendDownloadSpeedIndex = downloadSpeed => {
    console.log(downloadSpeed);
    this.props.getDownloadSpeedValueInSideBarMain(downloadSpeed);
  };

  sendCrimeIndex = crimeIndex => {
    this.props.getCrimeIndexValueInSideBarMain(crimeIndex);
  };

  sendSafetyIndex = safetyIndex => {
    this.props.getSafetyIndexValueInSideBarMain(safetyIndex);
  };

  sendTourismIndex = tourismIndex => {
    this.props.getTourismIndexValueInSideBarMain(tourismIndex);
  };
  render() {
    return (
      <nav class="sidebar-nav left-sidebar-menu-pro">
        <ul class="metismenu" id="menu1">
          <li class="active">
            <a class="has-arrow" href="index.html">
              <i style={{ marginRight: "1%" }} class="fas fa-sliders-h" />
              <span class="mini-click-non">Sliders</span>
            </a>
            <div style={{ marginLeft: "2%", width: "90%" }}>
              <ul class="submenu-angle" aria-expanded="true">
                <li style={{ marginBottom: "10%", marginTop: "5%" }}>
                  <CostOfLivingSlider
                    sendCostOfLivingIndex={this.sendCostOfLivingIndex}
                  />
                </li>

                <li style={{ marginBottom: "10%", marginTop: "10%" }}>
                  <DownloadSpeedSlider
                    sendDownloadSpeedIndex={this.sendDownloadSpeedIndex}
                  />
                </li>
                <li style={{ marginBottom: "10%", marginTop: "10%" }}>
                  <CrimeSlider sendCrimeIndex={this.sendCrimeIndex} />
                </li>
                <li style={{ marginBottom: "10%", marginTop: "10%" }}>
                  <SafetySlider sendSafetyIndex={this.sendSafetyIndex} />
                </li>
                <li style={{ marginBottom: "10%", marginTop: "10%" }}>
                  <TourismSlider sendTourismIndex={this.sendTourismIndex} />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
