import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import SideBarMain from "./components/sidebar/SideBarMain";
import MainView from "./components/main/MainView";

// import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/travelpicker",
  credentials: "same-origin"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      countryId: null
    };
  }
  getCountryInfo = (countryName, countryId) => {
    console.log(countryName, countryId);
    this.setState({ countryName, countryId }, function() {
      console.log(this.state.countryName);
    });
  };

  render() {
    let { countryName, countryId } = this.state;

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="row">
            <div className="col-6 col-md-4">
              <SideBarMain getCountryInfoInApp={this.getCountryInfo} />
            </div>
            <div class="all-content-wrapper">
              {/* <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="logo-pro">
                    <a href="index.html">
                      <img class="main-logo" src="" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
              <div className="col-9 col-sm-9 col-md-9">
                <MainView countryName={countryName} countryId={countryId} />
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
