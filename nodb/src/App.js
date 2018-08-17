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
      searchInput: '',
      isValid: false
     }
     this.handleTextChange = this.handleTextChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.componentDidMount = this.componentDidMount.bind(this);
     this.handleFavorite = this.handleFavorite.bind(this);
  }
  componentDidMount() {
    //Fake Movies
    axios.get('/api/fakemovies')
      .then(res => {
        console.log(res.data);
        this.setState({
          fakeMovies: res.data
        })
      })
      //OMDb API
      if(this.state.searchInput.length > 3) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e0948fc9937b09ded80d7c05693d8de7&query=${this.state.searchInput}`)
        .then(res => {
          this.setState({
            movieList: res.data.results
          })
          return axios.post('/api/movies', {res})
            .then(res => {
              console.log(res);
            })
        })
      } 
  }
  handleFavorite(id) {
    // let { favorites, movieList } = this.state;
    // let newList = favorites.concat();
    // let favMovie = movieList.find(movie =>  movie.id === id);
    // let newObj = {
    //   title: favMovie.title,
    //   id: favMovie.id
    // }
    // newList.push(newObj);
    // this.setState({
    //   favorites: newList,
    //   isValid: true
    // })
    
  }
  handleTextChange(event) {
    this.setState({
      searchInput: event.target.value
    })
  }
  onSubmit(event) {
    console.log('Fired');
    
    event.preventDefault();
  }
  render() { 
    //Deconstruct from state
    let { fakeMovies, movieList, favorites, isValid } = this.state

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
    
    return (
      <div className="App">
      {isValid ? <Favorites favList={favorites} /> : null}
      <div className="moviecomponent">
        <Search searchInput={this.state.searchInput} handleTextChange={this.handleTextChange} onSubmit={this.onSubmit} componentDidMount={this.componentDidMount} />
        {omList}
        {/* {fakeMoviesList}  */}
        </div>

        </div>

     );
  }
}
 
export default App;
