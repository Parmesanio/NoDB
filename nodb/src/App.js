import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';
import Favorites from './components/Favorites/Favorites';
//TODO - Button to randomly generate movies(POST), ability to add/remove to/from favorites(UPDATE) & delete from said list.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fakeMovies: [],
      movieList: [],
      favorites: [],
      searchInput: ''
     }
     this.handleTextChange = this.handleTextChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.componentDidMount = this.componentDidMount.bind(this);
     this.handleFavorite = this.handleFavorite.bind(this);
     this.handleDelete = this.handleDelete.bind(this);
     this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentDidMount() {
    //GET Favorites List
    axios.get('/api/movies/favorites')
      .then(getResponse => {this.setState({
          favorites: getResponse.data
        })
      })
      if(this.state.searchInput.length > 3) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e0948fc9937b09ded80d7c05693d8de7&query=${this.state.searchInput}`)
        .then(getResponse => {
          //POST data to server
          return axios.post('/api/movies', {getResponse})
            .then(postResponse => {
              this.setState({
                movieList: postResponse.data[0].results
              })
            })
            .catch(function (error) {
              console.log(error);
            });
        })
      } 
  }
  handleFavorite(id) {
    let { movieList } = this.state;
    let favMovie = movieList.find(movie => movie.id === id);
    axios.post("/api/movies/favorites", {favMovie})
      .then(postResponse => {
        this.setState({
          favorites: postResponse.data
        })
      })
  }
  handleDelete(id) {
    axios.delete(`/api/movies/favorites/${id}`)
      .then(deleteResponse => {
        this.setState({
          favorites: deleteResponse.data
        })
      })
  }
  handleUpdate(id, title) {
    axios.put(`/api/movies/favorites/${id}`, {title})
      .then(updateResponse => {
        console.log(updateResponse);
      })
  }
  handleTextChange(event) {
    this.setState({
      searchInput: event.target.value
    })
  }
  onSubmit(event) {
    event.preventDefault();
  }
  render() { 
    //Deconstruct from state
    let { fakeMovies, movieList, favorites } = this.state

    let fakeMoviesList = fakeMovies.map(fake => {
      //Deconstruct 'fake' object
      let { Title, Year, Type, Poster, id} = fake;
      return (
        <div key={id}>
          <img src={Poster} alt={Title} />
          <h1>{Title} - {Year}</h1>
          <p>{Type}</p>
        </div>
      )
    })

    let omList = movieList.map(movie => {
      //Deconstruct 'movie' object
      let { title, poster_path, overview, id } = movie;
      return <MovieList key={id} movieID={id} title={title} poster={poster_path} desc={overview} handleFavorite={this.handleFavorite} />
    })

    let favoritesList = favorites.map(fav => {
      let { id } = fav;
      return <Favorites key={id} favMovie={fav} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />;
    })
    
    return (
      <div className="App">
      <header>
      <Search searchInput={this.state.searchInput} handleTextChange={this.handleTextChange} onSubmit={this.onSubmit} componentDidMount={this.componentDidMount} />
      </header>
      {favorites.length > 0 ? 
      <section className="favorites">
      <h2>Favorites</h2>
      {favoritesList}
      </section>
      : null}
      <div className="moviecomponent">
        {omList}
        {/* {fakeMoviesList}  */}
        </div>

        </div>

     );
  }
}
 
export default App;
