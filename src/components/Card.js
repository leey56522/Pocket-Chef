import React from 'react';

function Card(props) {

    return (
        <div 
            className="card"
            style = {{backgroundImage: `url(${props.imgUrl})`}}
        >
            <div className="card-content">
                <h1 className="recipe-name">{props.name}</h1>
                {/* <i className="fa-solid fa-heart" id="fav-heart"></i> */}
            </div>
        </div>
    )
}

export default Card
