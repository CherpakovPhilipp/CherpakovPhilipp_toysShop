import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

import { setCategoryAsync } from '../../store/categories';

const { useEffect } = React;

const CategoryComponent = ({ dispatch, match, category }) => {
  useEffect(() => {
    dispatch(setCategoryAsync(match.params.id));
  }, []);

  return (
    <>
      {category && <h1>Category {category.title}</h1>}
      <ul className="category_products">
        {category && category.products && category.products.map(product => (
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
