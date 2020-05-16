import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../layout/Register';
import NotFound from '../layout/NotFound';
import Dashboard from '../pages/Dashboard';
import Explore from '../pages/Explore';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' render={Landing} />
      <Route exact path='/login' render={NotFound} />
      <Route exact path='/dashboard' render={Dashboard} />
      <Route exact path='/explore' render={Explore} />
      <Route exact path='/about' render={NotFound} />
      <Route exact path='/terms' render={NotFound} />
      <Route exact path='/privacy' render={NotFound} />
      <Route exact path='/contact' render={NotFound} />
    </Switch>
  );
};

export default Routing;
