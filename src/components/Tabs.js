import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Tabs = ({ mode }) => {
  const path = window.location.pathname;

  {
    if (path === "/bmfoto/") {
      console.log("1")
      return (
        <TabsBox mode={mode}>
          <Link
            className="nav-item-first"
            to="courses"
            spy={true}
            smooth={false}
            offset={-50}
            duration={800}
          >
            CURSOS
          </Link>
          <Link
            className="nav-item"
            to="corrientes"
            spy={true}
            smooth={false}
            offset={-13}
            duration={800}
          >
            CORRIENTES
          </Link>
          <Link
            className="nav-item"
            to="sesiones"
            spy={true}
            smooth={false}
            offset={70}
            duration={800}
          >
            SESIONES
          </Link>
          <RouterLink className="nav-item" to="/bmfoto/fotos" style={{color:"grey"}}>
            GALERIA
          </RouterLink>
          <Link
            className="nav-item"
            to="belumi"
            spy={true}
            smooth={false}
            offset={30}
            duration={800}
          >
            BELUMI
          </Link>
          <Link
            className="nav-item"
            to="contact"
            spy={true}
            smooth={false}
            offset={-60}
            duration={800}
          >
            CONTACTO
          </Link>
        </TabsBox>
      );
    }
    else if(path === "/bmfoto/fotos"){
      console.log("2")
      return (
        <TabsBox mode={mode}>
          <RouterLink className="nav-item" to="/bmfoto">
            <p style={{ marginLeft:"1150px"}}>HOME</p>
          </RouterLink>

        </TabsBox>
      );
    }
    else {
      console.log("3")
      return (
        <TabsBox mode={mode}>
          <RouterLink className="nav-item" to="/bmfoto">
            HOME
          </RouterLink>
          <RouterLink className="nav-item" to="/bmfoto/fotos">
            GALERIA
          </RouterLink>
         
        </TabsBox>
      );
    }
   
  }
};

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  // margin: 0 auto;
  text-align: center;
  z-index: 0;
  a {
    font-family: "Helvetica";
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #4d4d4d;
    cursor: pointer;
    padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")};
    background: transparent;
    border: 0px solid;
    display: block;
    margin: auto;
    height: 38px;
    display: flex;
    align-items: center;
    &:hover,
    &:active,
    &:focus {
      color: grey !important;
    }
  }
`;

export default Tabs;

