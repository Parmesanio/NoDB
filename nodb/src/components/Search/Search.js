import React from 'react';
import './search.css';

const Search = (props) => {
    return ( 
        <form onSubmit={(event) => props.onSubmit(event)}>
            <input type="text" value={props.searchInput} onChange={(event) => props.handleTextChange(event)} />
            <button onClick={props.componentDidMount}>Search</button>
        </form>
     );
}
 
export default Search;