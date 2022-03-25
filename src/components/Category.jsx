import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiSushis } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import React from 'react'

function Category() {
    return (
        <div id="cuisine-category">
            <SVLink to={'/cuisine/Chinese'}>
                <GiNoodles className="cuisine-icon" />
                <h4>Chinese</h4>
            </SVLink>
            <SVLink to={'/cuisine/Japanese'}>
                <GiSushis className="cuisine-icon" />
                <h4>Japanese</h4>
            </SVLink>
            <SVLink to={'/cuisine/Italian'}>
                <FaPizzaSlice className="cuisine-icon" />
                <h4>Italian</h4>
            </SVLink>
            <SVLink to={'/cuisine/American'}>
                <FaHamburger className="cuisine-icon" />
                <h4>American</h4>
            </SVLink>
        </div>
    )
}

const SVLink = styled.div`
    background-color: #003049;
    color: white;
    padding: 2rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0.7rem;
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);
    text-decoration: none;

    &:hover {
        background-color: #990000;
        background-image: linear-gradient(147deg, #990000 0%, #ff0000 74%);
    }
`

export default Category

