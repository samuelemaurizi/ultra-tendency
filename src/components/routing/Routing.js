import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../layout/Register';
import NotFound from '../layout/NotFound';
import Story from '../pages/Story';
import Explore from '../pages/Explore';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={NotFound} />
      <Route exact path='/story' component={Story} />
      <Route exact path='/explore' component={Explore} />
      <Route exact path='/about' component={NotFound} />
      <Route exact path='/terms' component={NotFound} />
      <Route exact path='/privacy' component={NotFound} />
      <Route exact path='/contact' component={NotFound} />
    </Switch>
  );
};

export default Routing;
