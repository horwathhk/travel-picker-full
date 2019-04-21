import React, { Component } from "react";
import { Query } from "react-apollo";
import CostOfLivingIndicator from "./CostOfLivingIndicator";
import CrimeIndicator from "./CrimeIndicator";
import DownloadSpeedIndicator from "./DownloadSpeedIndicator";
import SafetyIndicator from "./SafetyIndicator";
import { getCountryRankQuery } from "../../../queries/queries";
import TourismIndicator from "./TourismIndicator";

export default class CountryDataView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourismIndex: null
    };
  }

  render() {
    console.log(this.props.countryId);
    console.log(this.props.countryName);
    let content;
    return (
      <div>
        <Query
          query={getCountryRankQuery}
          variables={{
            country_id: this.props.countryId
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            if (data === null) return <div>Make a search</div>;
            // console.log(data.getCountryRank.safety_index);
            let costOfLivingIndex = data.getCountryRank.cost_of_living_index;
            let crimeIndex = data.getCountryRank.crime_index;
            let meanDownload = data.getCountryRank.mean_download;
            console.log(meanDownload);
            let safetyIndex = data.getCountryRank.safety_index;
            let tourismIndex = data.getCountryRank.tourism_index;
            this.props.sendTourismIndex(tourismIndex);

            let content = (
              <div class="section-admin container-fluid">
                <h2
                  class="breadcomb-ctn"
                  style={{ color: "white", marginTop: "10%" }}
                >
                  Country Data for {this.props.countryName}
                </h2>{" "}
                <div class="row admin text-center">
                  <div class="row">
                    <CostOfLivingIndicator
                      costOfLivingIndex={costOfLivingIndex}
                    />
                    <CrimeIndicator crimeIndex={crimeIndex} />
                    <DownloadSpeedIndicator downloadIndex={meanDownload} />
                    <TourismIndicator tourismIndex />
                  </div>
                </div>
              </div>
              // </div>
            );
            return content;
          }}
        </Query>
        {content}
      </div>
    );
  }
}
