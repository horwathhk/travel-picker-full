import React, { Component } from "react";
import SideBarHeaderView from "./SideBarHeaderView";
import SlidersView from "./sliders/SlidersView";
import ResultsList from "../sidebar/results/ResultsList";
import Divider from "@material-ui/core/Divider";

import { Query } from "react-apollo";
import { getCountryIndexesQuery } from "../../queries/queries";

let countryItems;

export default class SideBarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mobileOpen: false,
      costOfLivingIndexValue: 0,
      downloadSpeedValue: 0,
      crimeValue: 0,
      safetyValue: 0,
      tourismValue: 0,
      countryName: "",
      countryId: null
    };
  }

  getCountryInfoInHome = (countryName, countryId) => {
    console.log("fired");
    console.log(countryName);
    this.setState(
      { countryName: countryName, countryId: countryId },
      function() {
        console.log(this.state.countryName);
        console.log(this.state.countryId);
        this.props.getCountryInfoInApp(
          this.state.countryName,
          this.state.countryId
        );
      }
    );
  };

  getCostOfLivingIndexValueInSideBarMain = costOfLivingIndexValueFromSlider => {
    let { costOfLivingIndexValue } = this.state;
    console.log("costofliving" + costOfLivingIndexValueFromSlider);
    this.setState(
      { costOfLivingIndexValue: costOfLivingIndexValueFromSlider },
      function() {
        // console.log("fired from drawer");
        // console.log(costOfLivingIndexValueFromSlider);
        // this.props.getCostOfLivingValue(costOfLivingIndexValueFromSlider);
        // console.log(this.state.costOfLivingIndexValue);
      }
    );
  };

  getDownloadSpeedValueInSideBarMain = getDownloadSpeedValueFromSlider => {
    let { getDownloadSpeedValue } = this.state;
    if (getDownloadSpeedValue === null);
    this.setState(
      { costOfLivingIndexValue: getDownloadSpeedValueFromSlider },
      function() {
        // console.log("fired from drawer");
      }
    );
  };

  getCrimeIndexValueInSideBarMain = crimeIndex => {
    let { crimeValue } = this.state;
    if (crimeValue === null);
    this.setState({ crimeValue: crimeIndex }, function() {
      // console.log("fired from drawer");
    });
  };

  getSafetyIndexValueInSideBarMain = safetyIndex => {
    let { safetyValue } = this.state;

    this.setState({ safetyValue: safetyIndex }, function() {
      // console.log("fired from drawer");
      // console.log(safetyIndexValueFromSlider);
    });
  };

  getTourismIndexValueInSideBarMain = tourismIndex => {
    let { tourismValue } = this.state;
    this.setState({ tourismValue: tourismIndex }, function() {
      // console.log("fired from drawer");
      // console.log(tourismIndexValueFromSlider);
    });
  };
  render() {
    const { classes, theme } = this.props;
    const {
      open,
      costOfLivingIndexValue,
      downloadSpeedValue,
      crimeValue,
      safetyValue,
      tourismValue,
      countryName,
      countryId
    } = this.state;
    let countries;
    let countryList = [];
    console.log("from state" + costOfLivingIndexValue);
    console.log(this.props);

    const results = (
      // <div className="container">
      //   <div className="row">
      <div class="col align-self-center">
        <Query
          query={getCountryIndexesQuery}
          variables={{
            cost_of_living_index: costOfLivingIndexValue,
            mean_download: downloadSpeedValue,
            crime_index: crimeValue,
            safety_index: safetyValue,
            tourism_index: tourismValue
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            if (data === null) return <div>Make a search</div>;

            countries = data;
            if (countries) {
              console.log("query fired");
              // console.log(countries);
              countries = data.getCountryIndexes;
              if (data) {
                console.log("fired");
                // console.log(countries);
                countryItems = countries.map(country => (
                  <ResultsList
                    key={country.country_id}
                    country={country}
                    getCountryInfo={this.getCountryInfoInHome}
                  />
                ));
              }
            }
            return countryItems;
          }}
        </Query>
      </div>
      //   </div>
      // </div>
    );
    return (
      <div>
        <div class="left-sidebar-pro">
          <nav id="sidebar" class="" style={{ width: "32%" }}>
            <SideBarHeaderView />
            <div class="left-custom-menu-adp-wrap comment-scrollbar">
              <SlidersView
                getCostOfLivingIndexValueInSideBarMain={
                  this.getCostOfLivingIndexValueInSideBarMain
                }
                getDownloadSpeedValueInSideBarMain={
                  this.getDownloadSpeedValueInSideBarMain
                }
                getCrimeIndexValueInSideBarMain={
                  this.getCrimeIndexValueInSideBarMain
                }
                getSafetyIndexValueInSideBarMain={
                  this.getSafetyIndexValueInSideBarMain
                }
                getTourismIndexValueInSideBarMain={
                  this.getTourismIndexValueInSideBarMain
                }
              />

              {results}
            </div>

            <Divider />
          </nav>
        </div>
      </div>
    );
  }
}
