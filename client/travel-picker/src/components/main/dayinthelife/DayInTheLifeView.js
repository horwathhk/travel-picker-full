import React, { Component } from "react";
import YouTube from "react-youtube";

export default class DayInTheLifeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      countryName: "",
      test: "2g811Eo7K8U"
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
            ` https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?&order=viewCount&q=${countryName}`
          )
            .then(res => res.json())
            .then(
              result => {
                this.setState({
                  isLoaded: true,
                  items: result.items
                });
                console.log("youtube api fired " + result);
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
    const { error, isLoaded, items, countryName, test } = this.state;
    console.log(countryName);
    console.log(items);
    const opts = {
      height: "390",
      width: "640"
    };

    return (
      <div>
        <div class="product-sales-area mg-tb-30">
          <div class="container-fluid">
            <h2 class="breadcomb-ctn" style={{ color: "white" }}>
              Top Day In the Life Videos About {this.props.countryName}
            </h2>
            <div class="row">
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="product-sales-chart">
                  <div class="portlet-title">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="caption pro-sl-hd">
                          <span class="caption-subject text-uppercase" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="actions graph-rp">
                          <a
                            href="#"
                            class="btn btn-dark-blue btn-circle active tip-top"
                            data-toggle="tooltip"
                            title="Upload"
                          >
                            <i
                              class="fa fa-cloud-download"
                              aria-hidden="true"
                            />
                          </a>
                          <a
                            href="#"
                            class="btn btn-dark btn-circle active tip-top"
                            data-toggle="tooltip"
                            title="Refresh"
                          >
                            <i class="fa fa-reply" aria-hidden="true" />
                          </a>
                          <a
                            href="#"
                            class="btn btn-blue-grey btn-circle active tip-top"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            <i class="fa fa-trash-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <YouTube id={test} opts={opts} />
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <YouTube
                  id={test}
                  opts={opts}
                  style={{ height: "100%", width: "100%" }}
                />

                <div class="analytics-rounded">
                  <div class="analytics-rounded-content">
                    <h5>Percentage division</h5>
                    <h2>
                      <span class="counter">150</span>/
                      <span class="counter">54</span>
                    </h2>
                    <div class="text-center">
                      <div id="sparkline52" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
