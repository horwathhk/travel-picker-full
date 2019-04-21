import React, { Component } from "react";
import CountryOverview from "./CountryOverview";

export default class AboutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      countryName: "",
      snippet: "",
      locationOverview: "",
      featureImage: null
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.countryName !== prevProps.countryName) {
      console.log("fired from didUpdate");
      this.setState({ countryName: this.props.countryName }, function() {
        console.log("set state fired");
        console.log(this.state.countryName);
        let countryName = this.state.countryName;
        if (countryName) {
          fetch(
            `https://www.triposo.com/api/20181213/location.json?id=${countryName}&fields=all&account=Y7QSXUGK&token=kqsq9h5y5bayszmu5cxem9cwg4ly49vu`
          )
            .then(res => res.json())
            .then(
              result => {
                this.setState({
                  isLoaded: true,
                  items: result.items,
                  snippet: result.results[0].snippet,
                  locationOverview: result.results[0].content.sections[0].body,
                  featureImage: result.results[0].images[0].source_url
                });
                // console.log(result.results[0]);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              error => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            );
        } else {
          console.log("none");
        }
      });
    }
  }

  render() {
    const { error, isLoaded, items, countryName, snippet } = this.state;
    console.log(snippet);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div style={{ color: "white" }} className="text-center">
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          <div class="author-area-pro" style={{ marginTop: "5%" }}>
            <h2 class="breadcomb-ctn" style={{ color: "white" }}>
              About {this.props.countryName}
            </h2>
            <div class="container-fluid">
              <CountryOverview
                locationOverview={this.state.locationOverview}
                featureImage={this.state.featureImage}
                countryName={this.props.countryName}
              />
            </div>
            <p>hey!</p>
          </div>
        </div>
      );
    }
  }
}
