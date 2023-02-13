import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
     <Tabs/>
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #faf7f5;
  height: 100vh;
  padding: 50px 50px 30px 50px;
  position: absolute;
  top: 40px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  text-align: center;
  z-index: 2 !important;
`;

export default Menu;

