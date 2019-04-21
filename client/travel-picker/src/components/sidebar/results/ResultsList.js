import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { graphql, compose } from "react-apollo";
import InputRange from "react-input-range";
import USA from "../../../img/usa.JPG";
import "react-input-range/lib/css/index.css";

import { downloadSpeedIndexQuery } from "../../../queries/queries";

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country_name: 2,
      country_id: null
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.getDownloadSpeedValueInDrawer(this.state.value);
    console.log("download slider action!");
  };

  sendData = data => {
    let { country_name, country_id } = this.state;
    let { country } = this.props;
    this.setState(
      { country_name: country.country_name, country_id: country.country_id },
      function() {
        console.log("from results list");
        console.log(this.state.country_name);
        console.log(this.state.country_id);
        this.props.getCountryInfo(
          this.state.country_name,
          this.state.country_id
        );
      }
    );
    console.log("from results");
  };

  componentDidUpdate(req, res) {
    // const countries = this.props;
    // console.log(countries);
  }

  render() {
    const { classes, country } = this.props;
    const { value } = this.state;
    // console.log(this.props.country.name);

    return (
      <div>
        <div class="row" style={{ marginTop: "5%" }}>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div
              class="personal-info-wrap"
              // style={{
              //   width: "25rem",
              //   marginLeft: "-4rem",
              //   backgroundColor: "#152036",
              //   marginTop: "3%"
              // }}
            >
              <div class="widget-head-info-box" onClick={() => this.sendData()}>
                <img
                  src={USA}
                  class=" m-b-md"
                  alt="profile"
                  style={{ height: "100%", width: "100%" }}
                />

                <div class="persoanl-widget-hd" />
              </div>
              <div class="widget-text-box">
                <h4>{this.props.country.country_name}</h4>
                <p>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsList;
