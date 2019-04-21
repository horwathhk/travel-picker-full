import React, { Component } from "react";
import MissingImage from "../../../img/MissingImage.png";

export default class TopCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      modalStatus: false,
      isLoaded: false,
      items: [],
      countryName: ""
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(cityName) {
    // this.sendOpenModel("true");
    // e.preventDefault();
    console.log("city name in top cities " + cityName);
    let status;
    const modalStatus = !this.state.modalStatus;
    this.setState(
      {
        modalStatus
      },
      console.log("modalVisible " + this.state.modalVisible)
    );
    this.props.getModalOpen(modalStatus, cityName);
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
            `https://www.triposo.com/api/20181213/location.json?part_of=${countryName}&tag_labels=city&count=6&account=Y7QSXUGK&token=kqsq9h5y5bayszmu5cxem9cwg4ly49vu`
          )
            .then(res => res.json())
            .then(
              result => {
                this.setState({
                  isLoaded: true,
                  items: result.results
                });
                console.log(result);
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
    const { error, isLoaded, items, countryName } = this.state;
    // console.log(countryName);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div class="author-area-pro" style={{ marginTop: "5%" }}>
            <h2
              class="breadcomb-ctn"
              style={{ color: "white" }}
              // onClick={this.openModal.bind(this)}
            >
              Top Cities in {this.props.countryName}
            </h2>
            <div class="container-fluid">
              <div class="row">
                {items.map(item => (
                  <div
                    class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
                    style={{ marginTop: "3%" }}
                  >
                    <div
                      key={item.name}
                      class="personal-info-wrap"
                      onClick={this.openModal.bind(this, item.name)}
                    >
                      <div class="widget-head-info-box">
                        {item.images[0] ? (
                          <img
                            src={item.images[0].source_url}
                            style={{ height: "100%", width: "100%" }}
                          />
                        ) : (
                          <img
                            src={MissingImage}
                            style={{ height: "100%", width: "100%" }}
                          />
                        )}

                        <div class="persoanl-widget-hd" />
                      </div>
                      <div class="widget-text-box">
                        <h4>{item.name}</h4>
                        <p>{item.snippet}</p>
                        <div class="text-right like-love-list">
                          <a
                            class="btn btn-xs btn-white"
                            onClick={this.openModal.bind(this, item.name)}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
