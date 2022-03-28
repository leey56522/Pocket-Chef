import React from 'react'
import Category from './Category';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header id="nav-bar">
            <Logo to={'/'}>Pocket Chef</Logo>
            <Category />
        </header>
    )
}

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  font-family: 'Lobster', cursive;
`

export default Navbar
