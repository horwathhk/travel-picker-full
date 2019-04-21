import React, { Component } from "react";
import PropTypes from "prop-types";
// import { graphql, compose } from "react-apollo";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

// import { downloadSpeedIndexQuery } from "../../queries/queries";
class DownloadSpeedSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // console.log(this.props);

    return (
      <div>
        <div>
          <span class="mini-click-non">Download Speed</span>
        </div>
        <br />
        <div>
          <InputRange
            maxValue={210}
            value={this.state.value}
            onChange={value =>
              this.setState({ value }, function() {
                this.props.sendDownloadSpeedIndex(this.state.value);
              })
            }
          />
        </div>
      </div>
    );
  }
}

export default DownloadSpeedSlider;
