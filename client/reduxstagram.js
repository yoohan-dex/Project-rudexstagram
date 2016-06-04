// let's go!
import React from 'react';
import { render }from 'react-dom';

import css from './styles/style.styl';

import { Router } from 'react-router';
import { Provider }from 'react-redux';
import store, { history } from './store';

import {Route, IndexRoute} from 'react-router'


import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
       <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path='/view/:postid' component={Single}/>
      </Route>
    </Router>
  </Provider>  
)
export default router;

render(router,document.getElementById('root')); 