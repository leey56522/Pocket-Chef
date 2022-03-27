import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(function() {
        getPopular();
    }, []);

    const getPopular = async function() {
        const check = JSON.parse(localStorage.getItem('popular'));
        if(check) {
            setPopular(check)
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes);
        }
    }

    return (
        <div>
            <Wrapper>
                <h3 className="picks">Popular Picks</h3>
                <Splide options={{perPage: 4, gap: '3rem', pagination: false, drag: 'free', rewind: true}}>
                {popular.map(recipe => {
                    return (
                        <SplideSlide>
                            <Link to={'/recipe/' + recipe.id}>
                            <Card 
                                key={recipe.id}
                                imgUrl={recipe.image} 
                                name={recipe.title} 
                                diets={recipe.diets[1]}
                                vegan={recipe.vegan}
                                vegetarian={recipe.vegetarian}
                                backgroundColor={'#fcbf49'}
                            />
                            </Link>
                        </SplideSlide>
                    )
                })}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`


export default Popular
