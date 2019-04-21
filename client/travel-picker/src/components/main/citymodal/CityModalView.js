import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalContentComponent from "./TopFoodComponent";
import TopFoodComponent from "./TopFoodComponent";
import TopAttractionsComponent from "./TopAttractionsComponent";
import TopNightlifeComponent from "./TopNightlifeComponent";
import TopCultureComponent from "./TopCultureComponent";
import AboutCityComponent from "./AboutCityComponent";

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
      ? {
          display: "block",
          background: "rgba(0,0,0,.7)",
          overflowY: "scroll"
        }
      : { display: "none" };
    return (
      <div className="App">
        <div
          id="exampleModalLong"
          className="modal fade in"
          role="dialog"
          style={styles}
        >
          <div className="modal-dialog" style={{ width: "80%" }}>
            <div
              className="modal-content"
              style={{ backgroundColor: "#152036" }}
            >
              <div className="modal-header">
                <button
                  type="button"
                  onClick={this.openModal}
                  className="close"
                  style={{ color: "white" }}
                >
                  &times;
                </button>
                <h2 class="breadcomb-ctn" style={{ color: "white" }}>
                  Life in {this.props.cityName}
                </h2>
              </div>
              <div className="modal-body">
                <AboutCityComponent cityName={this.props.cityName} />
                <TopFoodComponent cityName={this.props.cityName} />
                <TopAttractionsComponent cityName={this.props.cityName} />
                <TopNightlifeComponent cityName={this.props.cityName} />
                <TopCultureComponent cityName={this.props.cityName} />
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
