import React, { Component } from "react";
import { Link } from "react-router-dom";
import MissingImage from "../../../img/MissingImage.png";

export default class TopArticlesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      countryName: "",
      articles: [],
      images: []
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
            `https://www.triposo.com/api/20181213/article.json?location_ids=${countryName}&account=Y7QSXUGK&token=kqsq9h5y5bayszmu5cxem9cwg4ly49vu`
          )
            .then(res => res.json())
            .then(
              result => {
                this.setState(
                  {
                    isLoaded: true,
                    items: result.results.splice(0, 6),
                    articles: result.results[0].structured_content.images
                  },
                  function() {
                    let { items } = this.state;
                    console.log("articles list! " + this.state.articles);
                    let images = items.map(
                      item => item.structured_content.images
                    );
                    this.setState({ images: images }, function() {
                      console.log(images);
                      console.log(
                        "articles from article component " + this.state.items
                      );
                    });
                  }
                );
                console.log(result.results.splice(0, 6));
                // console.log(
                //   result.results[0].structured_content.images.owner_url
                // );
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
    const {
      error,
      isLoaded,
      items,
      countryName,
      articles,
      images
    } = this.state;
    console.log("items" + items);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div class="author-area-pro" style={{ marginTop: "5%" }}>
            <h2 class="breadcomb-ctn" style={{ color: "white" }}>
              Top Articles On {this.props.countryName}
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
                    <div key={item.id} class="personal-info-wrap">
                      <div class="widget-head-info-box">
                        {item.structured_content.images[0] ? (
                          <img
                            src={item.structured_content.images[0].source_url}
                            style={{ height: "100%", width: "100%" }}
                          />
                        ) : (
                          <img
                            src={MissingImage}
                            style={{ height: "100%", width: "100%" }}
                          />
                        )}

                        {/* <img
                          src={item.structured_content.images[0].source_url}
                          class=" m-b-md"
                          alt="profile"
                          style={{ height: "100%", width: "100%" }}
                        /> */}

                        <div class="persoanl-widget-hd" />
                      </div>
                      <div class="widget-text-box">
                        <h4>{item.name}</h4>
                        <p>{item.snippet}</p>
                        {/* <p>{item.source.name}</p> */}
                        <div class="text-right like-love-list">
                          <a
                            style={{ display: "table-cell" }}
                            href={item.structured_content.attribution[0].url}
                          >
                            Read More
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
