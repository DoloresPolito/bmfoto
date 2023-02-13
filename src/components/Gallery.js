import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import NewNavbar from "../components/NewNavbar"


import amazonas from '../assets/galeriamin/galeria1-min.jpg'
import random from '../assets/galeriamin/galeria2-min.jpg'
import retrato from '../assets/galeriamin/galeria5-min.JPG'
import amanecer1 from '../assets/galeriamin/galeria4-min.jpg'
import amanecer2 from '../assets/galeriamin/galeria6-min.jpg'
import paisaje from '../assets/galeriamin/galeria7-min.jpg'

// const { galeryArray } = require("../pictures");

export default function Gallery() {
  return (
    <>
    <div>
    <NewNavbar />
       </div>
      <div className="row" >
      <ScrollToTop style={{ textDecoration: "none" }} smooth />
        <div className="column">
          {/* {galeryArray.column1.map((pic) => (
            <Link to={`/fotos/${pic.name}`}>
              {" "} */}
              <div className="image-container">
              <img className="gallery-img"  src={random}></img>
                {/* <div className="image-text">{pic.name.toUpperCase()}</div> */}
              </div>

              <div className="image-container">
              <img className="gallery-img"  src={amazonas}></img>
            
                {/* <div className="image-text">{pic.name.toUpperCase()}</div> */}
              </div>

            {/* </Link>
          ))} */}
        </div>

        <div className="column">
          {/* {galeryArray.column2.map((pic) => (
            <Link to={`/fotos/${pic.name}`}>
              {" "} */}
              <div className="image-container">
                <img className="gallery-img"  src={amanecer2}></img>
                {/* <div className="image-text">{pic.name.toUpperCase()}</div> */}
              </div>

              <div className="image-container">
                <img className="gallery-img"  src={retrato}></img>
                {/* <div className="image-text">{pic.name.toUpperCase()}</div> */}
              </div>
            {/* </Link>
          ))} */}
        </div>

        <div className="column">
          {/* {galeryArray.column3.map((pic) => (
            <Link to={`/fotos/${pic.name}`}>
              {" "} */}
              <div className="image-container">
                <img className="gallery-img" src={paisaje}></img>
                {/* <div className="image-text">{pic.name.toUpperCase()}</div> */}
              </div>

              <div className="image-container">
                <img className="gallery-img" src={amanecer1}></img>
                {/* <div className="image-text">{pic.name.toUpperCase()}</div> */}
              </div>
            {/* </Link>
          ))} */}
        </div>

        {/* <div className="column">
        {pictures.column4.map((pic) => (
            <Link  to={`/fotos/${pic.name}`}>
              {" "}
              <img className="gallery-img" key={pic.name} src={pic.url}></img>
            </Link>
          ))}
        </div>  */}
      </div>
    </>
  );
}

