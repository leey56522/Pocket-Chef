import React from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = React.useState('');
    const navigate = useNavigate();

    const submitHandler= function(e) {
        e.preventDefault();
        navigate('/searched/' + input);
    }

    const changeInput = function(e) {
        setInput(e.target.value)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" onChange={changeInput}/>
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0 auto;
    position: relative;
    width: 50%;

    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: #003049;
        padding: 1rem 3rem;
        border-radius: 0.5rem;
        outline: none;
        width: 100%;
        color: white;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search
