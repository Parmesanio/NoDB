import React from 'react';

const Favorites = (props) => {
    let { favList } = props;
    console.log(favList);
    

    let favCollection = favList.map(fav => {
        let { title, id} = fav;
        return (
            <div key={id}>
            <p>{title}</p>
            <button>Delete</button>
            </div>
        )
    });
    return ( 
        <div>
            <h1>Favorites</h1>
            {favCollection}
        </div>
     );
}
 
export default Favorites;