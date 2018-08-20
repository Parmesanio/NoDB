import React from 'react';
import './search.css';
import {Link} from 'react-router-dom';

const Search = (props) => {
    return ( 
        <header>
        <form onSubmit={(event) => props.onSubmit(event)}>
            <input type="text" value={props.searchInput} onChange={(event) => props.handleTextChange(event)} />
            <button onClick={props.handleGetMovies}>Search</button>
        </form>
        </header>
     );
}
 
export default Search;