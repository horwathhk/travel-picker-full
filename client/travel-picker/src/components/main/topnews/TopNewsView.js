import React, { Component } from "react";
import MissingImage from "../../../img/MissingImage.png";

export default class TopNewsView extends Component {
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
            `https://newsapi.org/v2/everything?q=${countryName}&apiKey=93d902d479324ca5a3e1070b2c165b5e`
          )
            .then(res => res.json())
            .then(
              result => {
                this.setState({
                  isLoaded: true,
                  items: result.articles.splice(0, 6)
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
    console.log(countryName);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div class="author-area-pro" style={{ marginTop: "5%" }}>
            <h2 class="breadcomb-ctn" style={{ color: "white" }}>
              Top News for {this.props.countryName}
            </h2>
            <div class="container-fluid">
              <div class="row">
                {items.map(item => (
                  <div
                    class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
                    style={{
                      marginTop: "5%",
                      display: "inline-block",
                      float: "none"
                    }}
                  >
                    <div key={item.title} class="personal-info-wrap">
                      <div class="widget-head-info-box">
                        {item.urlToImage ? (
                          <img
                            src={item.urlToImage}
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
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p>{item.source.name}</p>
                        <div class="text-right like-love-list">
                          <a class="btn btn-xs btn-white" href={item.url}>
                            Read Article{" "}
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
