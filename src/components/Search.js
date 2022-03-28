import React from 'react'
import { FaSearch } from 'react-icons/fa';
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
        <form onSubmit={submitHandler}>
            <div>
                <FaSearch id="search-icon"/>
                <input type="text" onChange={changeInput}/>
            </div>
        </form>
    )
}

export default Search
