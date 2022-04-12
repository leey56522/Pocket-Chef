import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

function Category() {

    return (
        <div id="cuisine-menu">
            <CuisineLink to={'/cuisine/Chinese'}>
                Chinese
            </CuisineLink>
            <CuisineLink to={'/cuisine/Japanese'}>
                Japanese
            </CuisineLink>
            <CuisineLink to={'/cuisine/Italian'}>
                Italian
            </CuisineLink>
            <CuisineLink to={'/cuisine/American'}>
                American
            </CuisineLink>
        </div>
    )
}

const CuisineLink = styled(NavLink)`
  color: white;
  font-weight: 500;
  margin: 0 1vw;

  &:hover {
      color: #ffb703;
      transition: all 0.2s linear;
    }
`

export default Category

