import React from "react";
import { useState } from "react";
import "../App.css";

export default function ImageSlider({ slides, section }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [current1Index, setCurrent1Index] = useState(2);
  const arr = [1,1,1,1,1]

  console.log("corrientes slides", slides)
  console.log("section", section)
//  <img src={corrientesImages(`./corrientes${}-min.jpg`)} alt="hola"/> 

let slideStyles = {}
if(section === "sesiones"){
  slideStyles = {
    width: "100%",
    height: "100%",
    border: "2px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundImage: `url(${slides(`./sesiones${currentIndex}-min.jpg`)})`,
    transition: "all 1.6s",
  };
}

if(section === "corrientes"){
 slideStyles = {
    width: "100%",
    height: "100%",
    border: "2px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundImage: `url(${slides(`./corrientes${current1Index}-min.jpg`)})`,
    transition: "all 1.6s",
  };
}


  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    height:"100px"
  };

  const dotsStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "#eec943",
    fontSize: "40px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length  : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length ;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <div style={slideStyles}></div>

      <div style={dotsContainerStyles}>
        <div onClick={goToPrevious}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="60"
            fill="#eec943"
            class="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>{" "}
        </div>

        {arr.map((ar, slideIndex) => (
          
          <div
            style={dotsStyles}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <i class="bi bi-dot"></i>
          </div>
        ))}

        <div onClick={goToNext}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="60"
            fill="#eec943"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>{" "}
        </div>
      </div>
    </div>
  );
}

