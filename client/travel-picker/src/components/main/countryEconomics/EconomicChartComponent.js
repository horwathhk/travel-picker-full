import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class EconomicChartComponent extends React.Component {
  render() {
    return (
      <Line width={10} height={5} options={{ maintainAspectRatio: false }} />
    );
  }
}
export default EconomicChartComponent;
