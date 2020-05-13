import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../layout/Landing';
import NotFound from '../layout/NotFound';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' render={Landing} />
      <Route exact path='/about' render={NotFound} />
      <Route exact path='/terms' render={NotFound} />
      <Route exact path='/privacy' render={NotFound} />
      <Route exact path='/contac' render={NotFound} />
    </Switch>
  );
};

export default Routing;
