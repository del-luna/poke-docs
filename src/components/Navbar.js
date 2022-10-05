import React from "react";
import styled from "styled-components";
import {Routes, Route, Link} from 'react-router-dom';

const NavbarBlock = styled.div`
  height: 60px;
  text-align: left;
  background-color: black;
  color: white;
  font-size: 32px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

const Menu = styled.div`
  display: flex;
  font-size: 16px;
  color: white;
`;

const Item = styled.div`
  display: inline-block;
  color: orange;
  padding: 0 10px 0;
`;

const Img = styled.img`
  height: 32px;
  width: 32px;
  margin: auto;
`;


function Navbar(){
  return(
    <NavbarBlock>
      <Menu>
        <Link to='/'>
          <Img src='./pokeball.png'/>
          <Item>Pokemon</Item>
        </Link>
      </Menu>
      <Menu>
        <Link to='/illustrated-book'>
          <Item>illustrated-book</Item>
        </Link>
        <Link to='/favorites'>
          <Item>favorites</Item>
        </Link>
      </Menu>
    </NavbarBlock>
  );
}

export default Navbar;