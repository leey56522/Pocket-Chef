import { useEffect, useState } from 'react';
import React from 'react';
import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';

// Vegetarian component in the homepage
function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(function() {
        getVeggieTest();
    }, []);

    // Grabs vegetarian dish data from Spoonacular API
    const getVeggie = async function() {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`);
        const data = await response.json();
        setVeggie(data.recipes);
    }

    // Used during development to avoid hitting daily API call limit
    const getVeggieTest = async function() {
        const check = JSON.parse(localStorage.getItem('veggie'));
        if(check) {
            setVeggie(check)
        } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`);
            const data = await response.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
        }
    }

    return (
        <div>
            <h3 className="picks">Vegetarian Picks</h3>
            <Splide options={{perPage: 3, gap: '3rem', pagination: false, drag: 'free', rewind: true, arrows: false}}>
            {veggie.map(recipe => {
                return (
                    <SplideSlide>
                        <Link to={'/recipe/' + recipe.id}>
                        <Card 
                            key={recipe.id}
                            imgUrl={recipe.image} 
                            name={recipe.title} 
                        />
                        </Link>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    )
}

export default Veggie
