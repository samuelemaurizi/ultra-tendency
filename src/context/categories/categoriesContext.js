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
      username: ['Miriam Vog', 'Sophie Anderson', 'Charlie Fu'],
    },
    {
      img: nature,
      title: 'Nature',
      following: false,
      followers: '400K',
      username: ['Miriam Vog', 'Sophie Anderson'],
    },
    {
      img: cooking,
      title: 'Cooking',
      following: false,
      followers: '6.5M',
      username: ['Miriam Vog', 'Sophie Anderson', 'Charlie Fu'],
    },

    {
      img: travel,
      title: 'Travel',
      following: true,
      followers: '104K',
      username: ['Miriam Vog', 'Sophie Anderson'],
    },
    {
      img: science,
      title: 'Science',
      following: true,
      followers: '203K',
      username: ['Miriam Vog', 'Sophie Anderson', 'Charlie Fu'],
    },
    {
      img: music,
      title: 'Music',
      following: true,
      followers: '80K',
      username: ['Miriam Vog', 'Sophie Anderson'],
    },
  ]);

  return (
    <CategoriesContext.Provider value={[categories]}>
      {children}
    </CategoriesContext.Provider>
  );
};
