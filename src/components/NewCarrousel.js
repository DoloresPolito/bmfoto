import React, { useState, useEffect } from "react";
import { useTransition, animated} from "react-spring";
import "../App.css";


// const realImages = ["/images/belenmiguens1.-min.jpg","/images/belenmiguens2.-min.jpg"]
// https://github.com/githubusername/repo_name/blob/master/20160309_212617-1.png?raw=true

const realImages = ["https://github.com/DoloresPolito/bmfoto/blob/main/public/images/belenmiguens1.-min.jpg?raw=true", "https://github.com/DoloresPolito/bmfoto/blob/main/public/images/belenmiguens2.-min.jpg?raw=true"];
const NewCarrousel = () => {
  const [index, setIndex] = useState(1);

  const transitions = useTransition(index, {
    from: { opacity: 0},
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {duration:2000}
  });



useEffect(() => {
setInterval(() => {
console.log("interval", index)

    if(index === 1){
      setIndex(0)
    }
    if(index === 0){
      console.log("entra a cero")
      setIndex(1)
 
    }

 
}, 5000);
},[])



  return (
    <div className='carousel-container-principal'>
      {transitions((style, index) => (
        <animated.div
        className='images-carrousel-principal'
          style={{
            ...style,
            position: "absolute",
            width: "100vw",
            height: "calc(100vh - 50px)",
            backgroundPosition:"center",
            backgroundSize:"cover",
            top:"120px",
            left:"0",
            // `url(${slides[currentIndex].url})`,
            // ../assets/belumi/belenmiguens1.-min.jpg
            backgroundImage: `url(${realImages[index]})`,
            // backgroundImage: `url('/../src/assets/belumi/belenmiguens1.-min.jpg')`,
            // backgroundImage: "url('/../src/assets/belumi/belenmiguens1.-min.jpg')",
            zIndex: "0"
          }}
          
        >
        </animated.div>
      ))}
    </div>
  );

};

export default NewCarrousel;

