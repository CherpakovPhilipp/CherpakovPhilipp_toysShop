import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

import { getCategoryService } from '../../services/categoriesService';
import { setCategory } from '../../store/categories';

const { useEffect } = React;

const CategoryComponent = ({ dispatch, match, category }) => {
  useEffect(() => {
    getCategoryService(match.params.id)
      .then((data) => {
        dispatch(setCategory(data));
      });
  }, []);

  return (
    <>
      {category && <h1>Category {category.title}</h1>}
      <ul className="category_products">
        {category.products && category.products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title}
            </Link>
            <FaTrashAlt className="remove" />
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({ category: state.category });

export const Category = connect(mapStateToProps)(CategoryComponent);
