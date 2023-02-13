import React, { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";

export default function Courses() {
  const [items, setItems] = useState([]);
  const [itemsB, setItemsB] = useState([]);

  useEffect(
    () => setItems([{ delay: 200 }]),

    []
  );
  useEffect(
    () => setItemsB([{ delay: 200 }]),

    []
  );

  const transitionA = useTransition(items, {
    from: {  opacity: 0 },
    enter: (item) => (next) =>
      next({ opacity: 1, delay: item.delay }),
    // leave: { x: 500, y: 0, opacity: 0 },
  });
  const transitionB = useTransition(items, {
    from: { x: 500, y: 0, opacity: 0 },
    enter: (item) => (next) =>
      next({ x: 0, y: item.y, opacity: 1, delay: item.delay }),
    // leave: { x: 500, y: 0, opacity: 0 },
  });
  return (
    <div>
      <div className="courses-container" id="courses">
        <div className="courses-aside">
          {" "}
          {transitionA((style, itemA) =>
            itemA ? (
              <animated.div style={style} className="item">
                {/* <p>
          Clases grupales, particulares o personalizadas. Son talleres de 4
          clases en las que vemos como manejar la luz desde la cámara del
          celular. Composición, retrato y edición. La clases personalizadas
          para empresas se enfocan en las necesidades de los empleados
          dependiendo de si sacan fotos de arquitectura, productos o
          retratos.
        </p> */}
              
                <img src="/img/belumi/belumi1-min.jpg" height='200px' width='60'></img>
                <button>VER MAS</button>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="courses-section">
          {" "}
          {transitionB((style, itemB) =>
            itemB ? (
              <animated.div style={style} className="item">
                {" "}
                <p>
                  En el taller de fotografía de Ines Miguens: enseñamos a usar
                  la cámara de fotos en función manual, fotometrear, teoría y
                  práctica de luz, composición, lentes, Photoshop, retrato,
                  fotografía nocturna y paisajes.
                </p>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
