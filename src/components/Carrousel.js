import React from "react";
import ImageSlider from "./ImageSlider";
import "../App.css";
const { corrientes } = require("../pictures");

export default function Carousel() {
  return (
    <div className="carousel-container" id="corrientes">
      <ImageSlider slides={corrientes} />
    </div>
  );
}




