import React, { Fragment } from 'react';

import './App.css';

import { RouterProvider } from './context/routing/routerContext';
import { UsersProvider } from './context/users/usersContext';
import { UserProvider } from './context/user/userContext';
import { CategoriesProvider } from './context/categories/categoriesContext';
import Routing from './components/routing/Routing';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <UserProvider>
      <UsersProvider>
        <CategoriesProvider>
          <RouterProvider>
            <Fragment>
              <Navbar />
              <Routing />
              <Footer />
            </Fragment>
          </RouterProvider>
        </CategoriesProvider>
      </UsersProvider>
    </UserProvider>
  );
};

export default App;
