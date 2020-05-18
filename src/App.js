import React, { Fragment } from 'react';

import './App.css';

import { UsersProvider } from './context/users/usersContext';
import { UserProvider } from './context/user/userContext';
import { CategoriesProvider } from './context/categories/categoriesContext';
import Routing from './components/routing/Routing';
import Footer from './components/layout/Footer';

function App() {
  return (
    <UserProvider>
      <UsersProvider>
        <CategoriesProvider>
          <Fragment>
            <Routing />
            <Footer />
          </Fragment>
        </CategoriesProvider>
      </UsersProvider>
    </UserProvider>
  );
}

export default App;
