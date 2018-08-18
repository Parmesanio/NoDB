const express           = require('express'),
      bodyParser        = require('body-parser'),
      mC                = require('./controllers/movieController'),
      app               = express(),
      PORT              = 4000;

app.use(bodyParser.json());

//GET
app.get('/api/fakemovies', mC.read);
app.get('/api/movies/favorites', mC.readFavorites);

//POST
app.post('/api/movies', mC.create);
app.post('/api/movies/favorites', mC.createFavorites);

//DELETE
app.delete('/api/movies/favorites/:id', mC.deleteFavorites);

//UPDATE
app.put('/api/movies/favorites/:id', mC.update);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));