import React, { useState, createContext } from 'react';
import climate from '../../img/categories/climate.jpg';
import cooking from '../../img/categories/cooking.jpg';
import music from '../../img/categories/music.jpg';
import nature from '../../img/categories/plant.jpg';
import science from '../../img/categories/science.jpg';
import travel from '../../img/categories/travel.jpg';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      img: climate,
      title: 'Climate',
      following: true,
      followers: '2M',
      contact: 3,
    },
    {
      img: nature,
      title: 'Nature',
      following: false,
      followers: '400K',
      contact: 2,
    },
    {
      img: cooking,
      title: 'Cooking',
      following: false,
      followers: '6.5M',
      contact: 3,
    },

    {
      img: travel,
      title: 'Travel',
      following: true,
      followers: '104K',
      contact: 2,
    },
    {
      img: science,
      title: 'Science',
      following: true,
      followers: '203K',
      contact: 3,
    },
    {
      img: music,
      title: 'Music',
      following: true,
      followers: '80K',
      contact: 2,
    },
  ]);

  return (
    <CategoriesContext.Provider value={[categories]}>
      {children}
    </CategoriesContext.Provider>
  );
};
