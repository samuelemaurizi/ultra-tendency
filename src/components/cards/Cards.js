import React, { useContext } from 'react';
import './Cards.css';

import { CategoriesContext } from '../../context/categories/categoriesContext';
import Card from './Card';

const Cards = () => {
  const [categories] = useContext(CategoriesContext);

  return (
    <div className='container'>
      <div className='cards'>
        {categories.map((category, i) => (
          <Card key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
