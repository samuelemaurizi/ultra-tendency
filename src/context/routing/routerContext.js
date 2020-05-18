import React, { useState, createContext } from 'react';

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const onClick = (data) => {
    setLogin(data);
    console.log('Router Context:', data);
  };

  return (
    <RouterContext.Provider value={{ login, onClick }}>
      {children}
    </RouterContext.Provider>
  );
};
