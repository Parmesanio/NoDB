import React, { Component } from 'react';
import './App.css';
import './components/Search/search.css'
import axios from 'axios';
import {Link} from 'react-router-dom';
import router from './components/Router/router';


import Search from './components/Search/Search';
import MovieList from './components/MovieList/MovieList';
import Favorites from './components/Favorites/Favorites';

class App extends Component {
  render() { 
    return (
      <div>
      {router}
        </div>

     );
  }
}
 
export default App;
