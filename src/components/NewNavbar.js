import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import Menu from "./Menu";
import Tabs from "./Tabs";
import "../App.css";

const NewNavbar = () => {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);


  const [isOpen, setOpen] = useState(false);
  const medium = 1045;

  return (
    <div className="navbar-section">
      <div className="navbar-container">
        {width >= medium ? (
          <>
            <NavbarName>
              BELÉN <br />
              MIGUENS <br />
              <span className="fotografia">FOTOGRAFIA</span>
            </NavbarName>
            <Tabs mode="large" />
          </>
        ) : (
          <div className="menu-box">
       
            <Hamburger toggled={isOpen} toggle={setOpen} />
       
            <Menu open={isOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

const NavbarName = styled.span`
  font-family: "Helvetica";
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-decoration: none;
  color: #7a746e;
  letter-spacing: 7px;
  padding: ${(props) => (props.mode === "large" ? "0 0px" : "25px 0")};
  background: transparent;
  border: 0px solid;
  margin-left: 10px !important;
  // margin: 0 auto;
  padding-top: 45px;
  // height: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
  z-index: 2;
`;

export default NewNavbar;

