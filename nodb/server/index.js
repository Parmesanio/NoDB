const express           = require('express'),
      bodyParser        = require('body-parser'),
      mC                = require('./controllers/movieController'),
      app               = express(),
      PORT              = 4000;

app.use(bodyParser.json());

//GET
app.get('/api/fakemovies', mC.read);

//POST
app.post('/api/movies', mC.create);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));