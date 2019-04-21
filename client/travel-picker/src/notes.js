import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalContentComponent from "./ModalContentComponent";

class CityModalView extends React.Component {
  constructor(props) {
    console.log("Props - ", props);
    super(props);
    this.state = {
      modalVisible: false,
      countryName: "",
      cityName: ""
    };
    this.openModal = this.openModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log("this.props.modalOpen: " + this.props.modalOpen);
    console.log("this.state.modalVisible " + this.state.modalVisible);
    if (this.props.modalOpen !== prevProps.modalOpen) {
      this.openModal();
    } else {
      console.log("prevprops were the same ");
    }
  }
  openModal() {
    console.log("Open modal called ", this.state.modalVisible);
    const modalVisible = !this.state.modalVisible;
    this.setState(
      {
        modalVisible
      },
      console.log("modalVisible " + this.state.modalVisible)
    );
  }

  render() {
    let styles = this.state.modalVisible
      ? { display: "block", background: "rgba(0,0,0,.7)" }
      : { display: "none" };
    return (
      <div className="App">
        <div
          id="myModal"
          className="modal fade in"
          role="dialog"
          style={styles}
        >
          <div className="modal-dialog" style={{ width: "80%" }}>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  onClick={this.openModal}
                  className="close"
                >
                  &times;
                </button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <ModalContentComponent cityName={this.props.cityName} />
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.openModal}
                  type="button"
                  className="btn btn-default"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityModalView;


//component

import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { graphql, compose } from "react-apollo";
import InputRange from "react-input-range";
import USA from "../../../img/usa.JPG";
import "react-input-range/lib/css/index.css";

import { downloadSpeedIndexQuery } from "../../../queries/queries";

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country_name: 2,
      country_id: null
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.getDownloadSpeedValueInDrawer(this.state.value);
    console.log("download slider action!");
  };

  sendData = data => {
    let { country_name, country_id } = this.state;
    let { country } = this.props;
    this.setState(
      { country_name: country.country_name, country_id: country.country_id },
      function() {
        console.log("from results list");
        console.log(this.state.country_name);
        console.log(this.state.country_id);
        this.props.getCountryInfo(
          this.state.country_name,
          this.state.country_id
        );
      }
    );
    console.log("from results");
  };

  componentDidUpdate(req, res) {
    // const countries = this.props;
    // console.log(countries);
  }

  render() {
    const { classes, country } = this.props;
    const { value } = this.state;
    // console.log(this.props.country.name);

    return (
      <div>
        <div
          class="container"
          style={{ width: "1%" }}
          //   style={{ padding: "22px 0px" }}
        />
        <div class="row">
          <div class="col-12">
            <div
              class="card"
              style={{ width: "18rem", backgroundColor: "#152036" }}
              onClick={() => this.sendData()}
            >
              <img class="card-img-top" src={USA} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{this.props.country.country_name}</h5>
                <div class="col-md-auto">
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsList;
