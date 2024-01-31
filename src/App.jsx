import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import CarouselData from "./components/Carousel";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}