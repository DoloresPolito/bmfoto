import React, {useState} from "react";
import "../App.css";
import NewNavbar from "./NewNavbar";
import emailjs from 'emailjs-com';

function ContactForm() {
  const path = window.location.pathname;

  const frmContact = { userName:``, userEmail:``, message:`` };
  const [contact,setContact] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = e => { 
   const {name,value} = e.target;
   setContact({...contact,[name]:value}); 
  };


  const handleSubmit = e =>{
     e.preventDefault();
    
   emailjs.send(`service_lsilwkf`,`template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)
   .then((response) => {
          console.log(`SUCCESS!`, response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
   }, (err) => {
          console.log(`FAILED...`, err);
   });
  }

  // const showNavbar = () => {
  //   return <NewNavbar />;
  // };
  return (
    <>
      {/* {path === "/contacto" ? showNavbar() : ""} */}
      <div className="contact-form" id="contact">
        <aside className="form-aside">
          <h2 className="titulo-form">Contactame</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputs">
              <input
                className="form-item"
                placeholder="NOMBRE Y APELLIDO"
                type="text"
                required
                value={contact.userName}
                name="userName" 
                onChange={handleChange}
              />

              <input
                className="form-item"
                placeholder="EMAIL"
                value={contact.userEmail}
                onChange={handleChange}
                name="userEmail"
                type="text"
                required
              />


              <textarea
              name="message"
                placeholder="MENSAJE"
                className="form-text"
                onChange={handleChange} 
                type="text"
                required
                value={contact.message}
              ></textarea>


              <button
                type="submit"
                className="bottom-color"
                style={{ fontSize: "16px" }}
              >
                Enviar
              </button>
            </div>
          </form>
        </aside>
      </div>



    </>
  );
}

export default ContactForm;

