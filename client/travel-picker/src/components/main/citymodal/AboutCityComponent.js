import React, { Component } from "react";
import MissingImage from "../../../img/MissingImage.png";

export default class AboutCityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      modalStatus: false,
      isLoaded: false,
      items: [],
      countryName: "",
      cityName: ""
    };
  }

  openModal(e) {
    // this.sendOpenModel("true");
    e.preventDefault();
    let status;
    const modalStatus = !this.state.modalStatus;
    this.setState(
      {
        modalStatus
      },
      console.log("modalVisible " + this.state.modalVisible)
    );
    this.props.getModalOpen(modalStatus);
  }

  componentDidUpdate(prevProps) {
    console.log("props in modal content component + " + this.props.countryName);
    if (this.props.cityName !== prevProps.cityName) {
      console.log("fired from didUpdate");
      this.setState({ cityName: this.props.cityName }, function() {
        console.log("set state fired");
        console.log(this.state.cityName);
        let cityName = this.state.cityName;
        if (cityName) {
          fetch(
            `https://www.triposo.com/api/latest/location.json?id=${cityName}&tag_labels=city&fields=name,id,snippet,attribution,images&account=Y7QSXUGK&token=kqsq9h5y5bayszmu5cxem9cwg4ly49vu`
          )
            .then(res => res.json())
            .then(
              result => {
                this.setState(
                  {
                    isLoaded: true,
                    items: result.results.slice(0, 6)
                  },
                  function() {
                    console.log(this.state.items);
                    // console.log(this.state.item.images[0].source_url);

                    // console.log(
                    //   this.state.items[0].structured_content.images[0]
                    //     .source_url
                    // );
                  }
                );
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
    console.log(this.props.cityName);
    // console.log(countryName);

    if (items.length < 1) {
      return (
        <div>
          <h1>No City Information :(</h1>
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="author-area-pro">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="personal-info-wrap">
                  {items[0].images[0].sizes.medium.url ? (
                    <img
                      src={items[0].images[0].sizes.medium.url}
                      style={{ height: "100%", width: "100%" }}
                    />
                  ) : (
                    <img
                      src={MissingImage}
                      style={{ height: "100%", width: "100%" }}
                    />
                  )}

                  <div class="widget-text-box">
                    <h4>About {items[0].name}</h4>
                    <p>{items[0].snippet}</p>
                    <div class="text-right like-love-list">
                      <a class="btn btn-xs btn-white">
                        <i class="fa fa-thumbs-up" /> Like{" "}
                      </a>
                      <a class="btn btn-xs btn-primary">
                        <i class="fa fa-heart" /> Love
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
