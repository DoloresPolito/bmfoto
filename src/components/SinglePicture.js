import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import InternalGallery from "./InternalGallery";
const { data } = require("../pictures");

export default function SinglePicture() {
  const params = useParams();
  const itemPictures = data[params.name].extra;

  return (
    <>
      <div className="selectedpicture-container">
        <section className="selectedpicture-section">
          {/* <h1>INTERNAL GALLERY</h1>
          <p className="picture-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </section>
        <aside className="selectedpicture-aside">
        
        <InternalGallery props={itemPictures}/>

         

        </aside>
      </div>
    </>
  );
}

