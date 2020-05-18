import React, { useState, createContext } from 'react';

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem('loggedIn'));

  const onClick = (data) => {
    setLogin(data);
  };

  return (
    <RouterContext.Provider value={{ login, onClick }}>
      {children}
    </RouterContext.Provider>
  );
};
