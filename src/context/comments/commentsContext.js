import React, { useState, createContext } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([
    {
      name: 'Miriam Vog',
      comment: 'Very nice article',
      like: true,
    },
    {
      name: 'Bob',
      comment: 'Quite useful',
      like: true,
    },
    {
      name: 'Charlotte Fu',
      comment: 'I can not say better',
      like: true,
    },
  ]);

  return (
    <CommentsContext.Provider value={[comments, setComments]}>
      {children}
    </CommentsContext.Provider>
  );
};
