import { useEffect, useState } from 'react';
import React from 'react';
import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(function() {
        getVeggie();
    }, []);

    const getVeggie = async function() {
        const check = JSON.parse(localStorage.getItem('veggie'));
        if(check) {
            setVeggie(check)
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`);
            const data = await api.json();
            console.log(data);
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
                        <Card 
                            imgUrl={recipe.image} 
                            name={recipe.title} 
                            diets={recipe.diets[1]}
                            vegan={recipe.vegan}
                            vegetarian={recipe.vegetarian}
                            backgroundColor={'#d43131'}
                        />
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    )
}

export default Veggie
