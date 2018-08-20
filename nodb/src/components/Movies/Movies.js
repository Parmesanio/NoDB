import React, { Component } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import MovieList from '../MovieList/MovieList';
import Favorites from '../Favorites/Favorites';


class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieList: [],
      favorites: [],
      searchInput: ''
     }
     this.handleTextChange = this.handleTextChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.handleGetMovies = this.handleGetMovies.bind(this);
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
  }
  handleGetMovies() {
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
    if (title.length > 0) {
      axios.put(`/api/movies/favorites/${id}`, {title})
      .then(updateResponse => {
        console.log(updateResponse);
      })
    }
  }
  handleTextChange(event) {
    this.setState({
      searchInput: event.target.value
    })
  }
  onSubmit(event) {
    //Prevent form from refreshing page
    event.preventDefault();
  }
  render() { 
    //Deconstruct from state
    let { movieList, favorites } = this.state
    

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
            <Search searchInput={this.state.searchInput} handleTextChange={this.handleTextChange} onSubmit={this.onSubmit} handleGetMovies={this.handleGetMovies} />
            {favorites.length > 0 ? 
            <section className="favorites">
            <h2>Favorites</h2>
            {favoritesList}
            </section>
            : null}
            <div className="moviecomponent">
                {omList}
                </div>
        </div>

     );
  }
}
 
export default Movies;
