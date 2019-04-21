import React, { Component } from "react";
import PropTypes from "prop-types";
// import Typography from "@material-ui/core/Typography";
// import { graphql, compose } from "react-apollo";
// import { costOfLivingIndexQuery } from "../../queries/queries";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const sliderStyle = {
  color: "red !important",
  padding: "22px 0px"
};

export default class CostOfLivingSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    };
  }

  // handleChange = (event, value) => {
  //   this.setState({ value });
  //   this.props.sendsendCostOfLivingIndex(this.state.value);
  //   console.log("actioN!");
  // };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div>
          <span class="mini-click-non">Cost of Living</span>
        </div>
        <br />
        <InputRange
          maxValue={210}
          value={this.state.value}
          onChange={value =>
            this.setState({ value }, function() {
              this.props.sendCostOfLivingIndex(this.state.value);
            })
          }
          style={sliderStyle}
        />
      </div>
    );
  }
}
