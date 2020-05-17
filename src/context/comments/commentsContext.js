import React, { useState, createContext } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([
    {
      image: 'https://picsum.photos/200?random=1',
      name: 'Miriam Vog',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos porro dolore.',
      liked: true,
      like: 9,
      date: 20,
    },
    {
      image: 'https://picsum.photos/200?random=2',
      name: 'Sophie Anderson',
      text: 'Itaque corrupti minima provident assumenda deserunt debitis.',
      liked: false,
      like: 4,
      date: 4,
    },
    {
      image: 'https://picsum.photos/200?random=3',
      name: 'Charlie Fu',
      text:
        'Tempora maxime vero modi neque culpa autem quia, velit facilis nesciunt similique.',
      liked: true,
      like: 3,
      date: 2,
    },
  ]);

  return (
    <CommentsContext.Provider value={[comments, setComments]}>
      {children}
    </CommentsContext.Provider>
  );
};
