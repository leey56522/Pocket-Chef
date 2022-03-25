import React from 'react'

function Card(props) {

    return (
        <div className="card" style={{backgroundColor: props.backgroundColor}}>
            <img src={props.imgUrl} alt={props.name} />
            <div className="card-content">
                <h1 className="recipe-name">{props.name}</h1>
                <i class="fa-solid fa-heart" id="fav-heart"></i>
            </div>
        </div>
    )
}

export default Card
