let movieList = [];
let favorites = [];
let photos = [];

module.exports = {
    //GET
    readFavorites: (req, res) => {
        res.status(200).send(favorites);
    },
    getDetails: (req, res) => {
        let what = movieList.map(e => e.results)
        
        let { id } = req.params;
         let movie = what[0].find(movie => movie.id == id);
         

         if (movie !== -1) {
             res.status(200).send(movie);
         }
    },
    //POST
    create: (req, res) => {
        movieList = [];
        let data = req.body.getResponse.data;
        movieList.push(data);
        res.status(200).send(movieList);
    },
    createFavorites: (req, res) => {
        favorites.push(req.body.favMovie);
        res.status(200).send(favorites);
    },
    //DELETE
    deleteFavorites: (req, res) => {
        let { id } = req.params;
        let index = favorites.findIndex(fav => fav.id == id);
        if (index !== -1) {
            favorites.splice(index, 1);
            res.status(200).send(favorites);
        } else {
            res.status(400).send('How...');
        }
    },
    //UPDATE
    update: (req, res) => {
        let { id } = req.params;
        let { title } = req.body;
        let index = favorites.findIndex(fav => fav.id == id);

        if (index !== -1) {
            favorites[index].title = title;
            res.status(200).send(favorites);
        } else {
            res.status(400).send('Movie not found')
        }
    }
}