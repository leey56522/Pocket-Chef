import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Search bar component
function Search() {

    const [input, setInput] = React.useState('');
    const navigate = useNavigate();

    // navigates to a searched page with input value
    const submitHandler= function(e) {
        e.preventDefault();
        navigate('/searched/' + input);
    }

    // Detect changes as the input is being typed
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
