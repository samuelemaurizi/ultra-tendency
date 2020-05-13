import React, { Fragment } from 'react';
import './App.css';

import Routing from './components/routing/Routing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Fragment>
      <Routing />
      <Footer />
    </Fragment>
  );
}

export default App;
