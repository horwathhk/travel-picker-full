import React, { Component } from "react";
import PropTypes from "prop-types";
// import Typography from "@material-ui/core/Typography";
// import { graphql, compose } from "react-apollo";
// import { crimeAndSafetyIndexQuery } from "../../queries/queries";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class CrimeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <div>
          <span class="mini-click-non">Crime Index</span>
        </div>
        <br />
        <InputRange
          style={{ marginTop: "10%" }}
          maxValue={210}
          value={this.state.value}
          onChange={value =>
            this.setState({ value }, function() {
              this.props.sendCrimeIndex(this.state.value);
            })
          }
          style={{ padding: "22px 0px" }}
        />
      </div>
    );
  }
}

export default CrimeSlider;
