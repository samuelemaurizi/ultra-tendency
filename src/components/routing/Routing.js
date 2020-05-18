import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../layout/Register';
import NotFound from '../layout/NotFound';
import Trending from '../pages/Trending';
import Explore from '../pages/Explore';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Register} />
      <Route exact path='/trending' component={Trending} />
      <Route exact path='/explore' component={Explore} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routing;
