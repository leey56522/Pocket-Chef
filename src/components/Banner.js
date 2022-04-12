import React from 'react';
import Search from './Search';
import { BsArrow90DegUp } from 'react-icons/bs';

function Banner() {
    return (
        <div id="banner">
            <div id="pick-cuisine-box">
                <BsArrow90DegUp id="arrow" />
                <h4 id="pick-cuisine">Pick your cuisine! </h4>
            </div>
            <h2 id="banner-phrase">What will you be cooking today?</h2>
            <Search />
        </div>
    )
}


export default Banner
