import React from 'react'

function Card(props) {

    return (
        <div className="card" style={{backgroundColor: props.backgroundColor}}>
            <img src={props.imgUrl} alt={props.name} />
            <div className="card-content">
                <h1 className="recipe-name">{props.name}</h1>
                <div className="card-footer">
                    <h4>{props.vegan ? `#Vegan` : props.vegetarian ? `#Vegetarian` : ''}</h4>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        </div>
    )
}

export default Card
