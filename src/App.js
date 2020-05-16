import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routing from './components/routing/Routing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Routing />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
