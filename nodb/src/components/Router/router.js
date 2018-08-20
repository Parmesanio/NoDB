import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Movies from '../Movies/Movies';
import Details from '../Details/Details';

export default (
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route path='/api/movies/:id' component={Details} />
        </Switch>
    )