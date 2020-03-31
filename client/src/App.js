import React, { Component } from 'react';

import player from './components/player';
import manager from './components/manager';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notfound';
const App = () => (
  <Router>
    <Switch>
    <Route path='/' exact component={player} />
    <Route path='/manage' component={manager} />
    <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
