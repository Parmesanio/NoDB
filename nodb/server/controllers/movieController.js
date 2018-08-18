let movieList = []
// {
    //     Title: "Atom",
    //     Year: "2018",
    //     Type: 'Horror',
    //     Poster: "https://cdn.freebiesupply.com/logos/large/2x/atom-4-logo-png-transparent.png",
    //     id: 0
    // },
    // {
    //     Title: "Visual Studio Code",
    //     Year: "2018",
    //     Type: 'Action & Adventure',
    //     Poster: "https://cdn.freebiesupply.com/logos/large/2x/atom-4-logo-png-transparent.png",
    //     id: 0
    // }
let favorites = [

]



module.exports = {
    //GET
    read: (req, res) => {
        res.status(200).send(movieList);
    },
    readFavorites: (req, res) => {
        res.status(200).send(favorites);
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