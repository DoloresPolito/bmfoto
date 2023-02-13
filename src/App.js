
import "./App.css";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SinglePicture from "./components/SinglePicture";


import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/bmfoto" element={<Home />} />
          <Route path="/fotos" element={<Gallery />} />
          <Route path="/fotos/:name" element={<SinglePicture />} />
          <Route path="/belumi" element={<AboutMe />} />
          <Route path="/contacto" element={<ContactForm />} />

        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
