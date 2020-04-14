import React, { Component } from "react";
import "./StateExercise.css";

export default class StateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbsUp: true,
      color: "gray",
      currentImage: null
    };
    this.toggleThumbs = this.toggleThumbs.bind(this);
    this.toggleColors = this.toggleColors.bind(this);
    this.toggleVehicle = this.toggleVehicle.bind(this);
  }

  toggleThumbs() {
    this.setState({
      thumbsUp: !this.state.thumbsUp
    });
  }

  toggleColors() {
    let colors = ["red", "green", "blue", "gray"];

    if (this.state.color === colors[3]) {
      this.setState({
        color: colors[0]
      });
    }
    if (this.state.color === colors[0]) {
      this.setState({
        color: colors[1]
      });
    }
    if (this.state.color === colors[1]) {
      this.setState({
        color: colors[2]
      });
    }
    if (this.state.color === colors[2]) {
      this.setState({
        color: colors[3]
      });
    }
  }

  toggleVehicle(el) {
    const vehicle = {
      car:
        "https://www.autoscout24.es/assets/auto/images/model/mercedes-benz/mercedes-benz-200/mercedes-benz-200-m-02.webp",
      motorbike:
        "https://www.soymotero.net/sites/default/files/styles/max_width_1200px/public/2019-11/bmw-s-1000-rr-2020-01.jpg?itok=xndpPqtP",
      bicycle:
        "https://www.bikephilosophy.es/5346-thickbox_default/scott-sub-cross-eride-20-hombre.jpg",
      bus:
        "https://s3-media0.fl.yelpcdn.com/bphoto/HPq4vrAOjlHDqAUd9FaOHQ/o.jpg"
    };
    if (el.target.value === "car") {
      this.setState({
        currentImage: vehicle.car
      });
    }
    if (el.target.value === "motorbike") {
      this.setState({
        currentImage: vehicle.motorbike
      });
    }
    if (el.target.value === "bicycle") {
      this.setState({
        currentImage: vehicle.bicycle
      });
    }
    if (el.target.value === "bus") {
      this.setState({
        currentImage: vehicle.bus
      });
    }
  }
  render() {
    /* THUMBS */
    let thumbIcon = this.state.thumbsUp
      ? "fa fa-thumbs-up"
      : "fa fa-thumbs-down";

    let imgSrc = this.state.currentImage;

    return (
      <div>
        <i className={thumbIcon} onClick={this.toggleThumbs}></i>
        <br />
        <div
          className="tricolor"
          onClick={this.toggleColors}
          style={{ backgroundColor: this.state.color }}
        ></div>
        <div>
          <select
            defaultValue="bicycle"
            onChange={el => this.toggleVehicle(el)}
          >
            <option value="car">Coche</option>
            <option value="motorbike">Moto</option>
            <option value="bicycle">Bici</option>
            <option value="bus">Bus</option>
          </select>
          <div className="image-container">
            <img src={imgSrc} className="image-vehicle" />
          </div>
        </div>
      </div>
    );
  }
}
