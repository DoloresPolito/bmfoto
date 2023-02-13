import React from "react";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import NewNavbar from "./NewNavbar";
import NewCarrousel from "./NewCarrousel";
import Proyects from "./Proyects";
import Sesions from "./Sesions";
import "../App.css";

export default function Home() {
  return (
    <>
      <NewNavbar />
      <div className="contenedor">
        <NewCarrousel />
        <Proyects />
        <Sesions />
        <AboutMe />
        <ContactForm />
      </div>
    </>
  );
}

