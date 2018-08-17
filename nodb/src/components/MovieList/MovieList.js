import React from 'react';
import './movielist.css';

const MovieList = (props) => {
    let { title, poster, movieID, desc} = props;
    
    return ( 
        props.poster === "N/A" ? 
            <div className="movie">
                <img src="https://cdn.browshot.com/static/images/not-found.png" alt={title} />
                <button>Favorite</button>
            </div> 
            :
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
                {/* <p>{desc}</p> */}
                <hr />
                <button onClick={() => props.handleFavorite(movieID)}>Favorite</button>
            </div> 
     );
}
 
export default MovieList;