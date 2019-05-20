import { server } from '../../services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    server.get('public/categories')
      .then(categories => {setCategories(categories);console.log(categories)})
  },[])

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => <li key={category.title}><Link to={`categories/${category.id}`}>{category.title}</Link></li>)}
      </ul>
    </>
  );
};
