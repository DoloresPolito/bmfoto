import React from "react";
import "../App.css";
import ScrollToTop from "react-scroll-to-top";
import NewNavbar from "./NewNavbar";

export default function InternalGallery(props) {


  const data = [
    "/img/galeria/uyini/_COL9210.JPG",
    "/img/galeria/uyini/a_COL8990.jpg",
    "/img/galeria/uyini/_COL9142.jpg",
    "/img/galeria/uyini/_COL9169.jpg",
    "/img/galeria/uyini/_COL9226.jpg",
    "/img/galeria/uyini/_COL9256.jpg",
    "/img/galeria/retrato/IMG_5410 copia.jpg",
    "/img/galeria/retrato/IMG_5520 copia.img",
    "/img/galeria/retrato/0340fbf1-8e65-4e46-b91f-848bdc3c15f4.JPG",
    "/img/galeria/random/random.jpg",
    "/img/galeria/random/IMG_5655 copia.jpg",
    "/img/galeria/random/5e5a4b27-1eac-423d-99ef-107219a73297.JPG",
    "/img/galeria/paisajes/IMG_6431 copia.jpg",
    "/img/galeria/paisajes/IMG_6539 copia.jpg",
    "/img/galeria/paisajes/IMG_7059 copia.jpg",
    "/img/galeria/paisajes/IMG_7093 copia.jpg",
    "/img/galeria/paisajes/IMG_7095 copia.jpg",
    "/img/galeria/paisajes/IMG_7198 copia.jpg",
    "/img/galeria/paisajes/IMG_7246 copia.jpg",
    "/img/galeria/paisajes/IMG_7421 copia.jpg",
  ];

  // ,"amazonas":{name: "amazonas", url:"/img/galeria/amazonas/_MG_9887 copia.jpg", extra: [{name: "amazonas2", url:"/img/galeria/amazonas/_MG_0105 copia.jpg"},{name: "amazonas3", url:"/img/galeria/amazonas/_MG_0163 -jpg.tiff"},{name: "amazonas4", url:"/img/galeria/amazonas/_MG_9833 copia.jpg"},{name: "amazonas5", url:"/img/galeria/amazonas/_MG_9857 copia.jpg"},{name: "amazonas6", url:"/img/galeria/amazonas/_MG_0016 copia.jpg"},{name: "amazonas7", url:"/img/galeria/amazonas/a_MG_9280.jpg"},{name: "amazonas8", url:"/img/galeria/amazonas/a_MG_9732.jpg"},{name: "amazonas9", url:"/img/galeria/amazonas/IMG_9418 copia.jpg"},{name: "amazonas10", url:"/img/galeria/amazonas/IMG_9639 copia.jpg"}]}
  // ,"amanecer":{name: "amanecer", url:"/img/galeria/amanecer/7fa0f486-7575-4298-9402-934e21544a7c.JPG", extra: [{name: "amanecer2", url:"/img/galeria/amanecer/94cdda9a-eb9c-4aa1-b930-dffd1913425b.JPG"},{name: "amanecer3", url:"/img/galeria/amanecer/1935f555-e225-44f8-8617-26f06c2b7a06.JPG"},{name: "amanecer4", url:"/img/galeria/amanecer/b22815ac-3ac5-453f-809a-747765ba601d.JPG"},{name: "amanecer5", url:"/img/galeria/amanecer/d4a1a851-8d8a-4257-ba98-6ca16ea487bd.JPG"},{name: "amanecer6", url:"/img/galeria/amanecer/d933121d-0300-4bbd-ab15-90c909898d39.JPG"},{name: "amanecer7", url:"/img/galeria/amanecer/ef293a9e-5933-4964-882e-2289b30cee21.JPG"},{name: "amanecer8", url:"/img/galeria/amanecer/IMG_1134 copia.jpg"}]}

  return (
    <>
        <div>
    <NewNavbar />
       </div>
    <div className="internal-gallery-container">
          <p className="picture-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
     
     <ScrollToTop style={{ textDecoration: "none" }} smooth />

      <div className="row-internal">
        <div className="column-internal">
          <img src={data[15]} ></img>
          <img src={data[11]}></img>
          <img src={data[12]}></img>
        </div>

        <div className="column-internal">
          <img src={data[13]}></img>
          <img src={data[14]}></img>
          <img src={data[15]}></img>
        </div>
        <div className="column-internal">
          <img src={data[6]}></img>
          <img src={data[8]}></img>
          <img src={data[9]}></img>
        </div>
      
      </div>
    </div>
    </>
  );
}

