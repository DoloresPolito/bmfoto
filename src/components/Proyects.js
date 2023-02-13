import React from "react";
import ImageSlider from "./ImageSlider";
import "../App.css";
// const { corrientes } = require("../pictures");

const corrientesImages = require.context('../assets/corrientesmin', true)

export default function Proyects() {

  console.log("corrientesImages", corrientesImages)

  return (
    <div className="proyects-container" id="proyects">
      <section className="proyects-section">
        {" "}
        <div className="carousel-container" id="corrientes">

{/* <img src={corrientesImages(`./corrientes1-min.jpg`)} alt="hola"/> */}
          <ImageSlider slides={corrientesImages} section="corrientes"/>
        </div>
      </section>
      <aside className="proyects-aside">
        <h4 className="titulo-proyects">
          Proyecto
          <br />
          <span className="titulo-proyects-2">Corrientes</span>
        </h4>
        <div className="content">
          <div className="linea"></div>
          <p className="text">
            Retrato Cultural Talleres de fotografía con comunidades locales
            Desde el 2020 colaboro con el programa de{" "}
            <a
              href="https://www.instagram.com/artesanosdelibera/?hl=en"
              target="_blank"
              className="link-text"
            >
              Artesanos del Iberá
            </a>
            , del Gobierno de Corrientes. Como parte del programa, capacito a
            los artesanos para que saquen mejores fotos de sus productos,
            acompañándolos también en la edición y selección de estas fotos para
            el manejo de sus redes sociales, como canal de venta. El programa
            busca brindarles herramientas para que puedan comercializar con todo
            el país con un precio competitivo y justo.
          </p>
          <br />
          <a 
            href="https://www.instagram.com/artesanosdelibera/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <div className="linea-bottom"></div>
        </div>
      </aside>
    </div>
  );
}
