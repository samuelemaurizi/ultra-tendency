import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { CommentsProvider } from './context/comments/commentsContext';
import Routing from './components/routing/Routing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <CommentsProvider>
        <Fragment>
          <Routing />
          <Footer />
        </Fragment>
      </CommentsProvider>
    </Router>
  );
}

export default App;
