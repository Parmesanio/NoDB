let fakeMovies = [
    {
        Title: "Atom",
        Year: "2018",
        Type: 'Horror',
        Poster: "https://cdn.freebiesupply.com/logos/large/2x/atom-4-logo-png-transparent.png",
        id: 0
    },
    {
        Title: "Visual Studio Code",
        Year: "2018",
        Type: 'Action & Adventure',
        Poster: "https://cdn.freebiesupply.com/logos/large/2x/atom-4-logo-png-transparent.png",
        id: 0
    }
]
let favorites = [
    
]



module.exports = {
    read: (req, res) => {
        res.status(200).send(fakeMovies);
    },
    create: (req, res) => {
        
    },
    delete: (req, res) => {
        
    }
}