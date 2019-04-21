import React, { Component } from "react";
import PropTypes from "prop-types";
// import Typography from "@material-ui/core/Typography";
// import { graphql, compose } from "react-apollo";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const styles = {
  slider: {
    padding: "22px 0px"
  }
};

class TourismSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // console.log(this.props);

    return (
      <div>
        <div>
          <span class="mini-click-non">Tourism Index</span>
        </div>
        <br />
        <h4>
          <InputRange
            maxValue={210}
            value={this.state.value}
            onChange={value =>
              this.setState({ value }, function() {
                this.props.sendTourismIndex(this.state.value);
              })
            }
            style={{ padding: "22px 0px" }}
          />
        </h4>
      </div>
    );
  }
}

export default TourismSlider;
