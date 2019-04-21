import React, { Component } from "react";

export default class TopMusicView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      countryName: ""
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
            ` http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${countryName}&limit=5&api_key=e69ce9ab39cfcc51c55c6960dfce5cc0&format=json`
          )
            .then(res => res.json())
            .then(
              result => {
                this.setState({
                  isLoaded: true,
                  items: result.tracks.track
                });
                console.log(result.tracks.track);
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
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="product-sales-chart">
                  <div class="portlet-title">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div
                          style={{ marginBottom: "10%" }}
                          class="caption pro-sl-hd"
                        >
                          <span class="caption-subject text-uppercase">
                            <b>Top Music In {countryName}</b>
                          </span>
                        </div>
                      </div>
                      <div>
                        {items.map(item => (
                          <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <h4>
                                <a href={item.url}>{item.name}</a>
                              </h4>
                              <p style={{ color: "white" }}>
                                {item.artist.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
