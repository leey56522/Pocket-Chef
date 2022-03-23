import { useEffect, useState } from 'react';
import React from 'react';
import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(function() {
        getVeggies();
    }, []);

    const getVeggies = async function() {

        const check = JSON.parse(localStorage.getItem('veggie'));
        if(check) {
            setVeggie(check)
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
        }
    }

    return (
        <div>
                <h3>Low Calories</h3>
                <Splide options={{perPage: 3, gap: '3rem', pagination: false, drag: 'free', rewind: true}}>
                {veggie.map(recipe => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card 
                                imgUrl={recipe.image} 
                                name={recipe.title} 
                                diets={recipe.diets[1]}
                                vegan={recipe.vegan}
                                vegetarian={recipe.vegetarian}
                                backgroundColor={'#8220f8'}
                            />
                        </SplideSlide>
                    )
                })}
                </Splide>
        </div>
    )
}

export default Veggie
