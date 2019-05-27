import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCategoriesService } from '../../services/categoriesService';
import { setCategories } from '../../store/categories';


export const CategoriesComponent = ({ categories, dispatch }) => {
  useEffect(() => {
    getCategoriesService()
      .then((data) => { dispatch(setCategories(data)); });
  }, []);

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {
          categories.map(category => (
            <li key={category.title}>
              <Link to={`categories/${category.id}`}>
                {category.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.categories
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
