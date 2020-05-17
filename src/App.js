import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { UsersProvider } from './context/users/usersContext';
import { UserProvider } from './context/user/userContext';
import { CategoriesProvider } from './context/categories/categoriesContext';
import Routing from './components/routing/Routing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <UserProvider>
      <CategoriesProvider>
        <UsersProvider>
          <Router>
            <Fragment>
              <Routing />
              <Footer />
            </Fragment>
          </Router>
        </UsersProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}

export default App;
