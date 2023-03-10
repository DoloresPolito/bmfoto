import React, { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import "../App.css";

import { animated, useSpring, useTransition, config } from "@react-spring/web";
import useIntersectionObserver from "../hooks/Observer";
import NewNavbar from "./NewNavbar";
import belumi from '../assets/belumi/belenmiguens1.-min.jpg'

const realImages = ["/bmfoto/public/images/belenmiguens1.-min.jpg", "/bmfoto/public/images/belenmiguens2.-min.jpg"];

export default function AboutMe() {
  const triggerRefAbout = useRef();
  const dataRef = useIntersectionObserver(triggerRefAbout, {
    freezeOnceVisible: true,
  });
  const pStyle = useSpring({
    config: { duration: 900 },
    from: { opacity: 0, transform: "scale(0.2)" },

    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });


  const slideStyles = {
    width: "100%",
    height: "100%",
    border: "2px",
    // backgroundColor: "lightgrey",
    borderRadius: "5px",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundImage: `url(${realImages[0]})`,
    // transition: "all 1s",
  };

  const path = window.location.pathname;


  const showNavbar = () => {
    return(
      <NewNavbar/>
    )
  }

  return (
    <>
    {path === "/belumi" ? showNavbar() : ""}
    <div className="aboutme-container" id="belumi">
      <a id="ancla1"></a>
      <aside className="aboutme-aside">
        <div className="slider-container">
          <div >
          <img   src={belumi} style={slideStyles}/>
          </div>
        </div>
      </aside>
      <section className="aboutme-section">
        <div ref={triggerRefAbout} />
        <h2
          className="titulo-about"
         
        >
          Belumi
        </h2>
        <div className="content">
          <animated.div style={pStyle}>
            <div className="linea"></div>
            <p className="text">
              Soy Belumi, nacida en Buenos Aires, Argentina en 1989. Licenciada
              en Relaciones Internacionales de la UCA, con una diplomatura en
              Gesti??n en Recursos Humanos. <br />
              Estudi?? fotograf??a en la escuela de @inesmiguens en el 2008, y
              desde entonces soy fot??grafa. Viaje por 46 pa??ses sacando fotos,
              amo ense??ar fotograf??a. Y mi mayor pasi??n son los proyectos como
              el de Corrientes con @artesanosdelibera, por eso le dedico toda
              una secci??n en esta p??gina. Les comparto un poco de mi manera de
              ver el mundo ???? Espero que la disfruten como yo.
            </p>
            <br />
            <a
              href="https://www.instagram.com/belenmiguensfoto/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "20px" }}
            >
              <i class="bi bi-instagram"></i>
            </a>

            <a href="mailto:miguensbelen@gmail.com">
              <i class="bi bi-envelope-fill"></i>
            </a>
            <div className="linea-bottom"></div>
          </animated.div>
        </div>
      </section>
      <ScrollToTop
        style={{
          textDecoration: "none",
          backgroundColor: "#eec943",
          height: "55px",
        }}
        smooth
      />
    </div>
    </>
  );
}
