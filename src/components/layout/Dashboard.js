import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Trending from '../pages/Trending';
import Explore from '../pages/Explore';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/trending' component={Trending} />
        <Route exact path='/dashboard/explore' component={Explore} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Dashboard;
