import React from 'react';
import './movielist.css';
import {Link} from 'react-router-dom';

const MovieList = (props) => {
    let { title, poster, movieID, desc} = props;

    return ( 
        props.poster === null ? 
            <div className="movie">
                <img src="https://cdn.browshot.com/static/images/not-found.png" alt={title} />
                <p className="desc">{desc}</p>
                <hr />
                <button onClick={() => props.handleFavorite(movieID)}>Favorite</button>
                <Link className="hide" to={`/api/movies/${movieID}`}><button>Info</button></Link>
            </div> 
            :
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
                <p className="desc">{desc}</p>
                <hr />
                <button onClick={() => props.handleFavorite(movieID)}>Favorite</button>
                <Link className="hide" to={`/api/movies/${movieID}`}><button>Info</button></Link>
            </div> 
     );
}
 
export default MovieList;