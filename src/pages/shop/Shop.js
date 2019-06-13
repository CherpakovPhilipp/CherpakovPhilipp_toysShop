import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Loader } from '../../components/loader';
import { setCategoriesAsync } from '../../store/categories';

const { useEffect } = React;

export const ShopComponent = ({ dispatch, categories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    dispatch(setCategoriesAsync());
  }

  const filterPublished = () => {
    return categories.filter(item => item.published);
  }

  return (
    !categories ? <Loader />
      : (
        <>
          <h1>Shop</h1>
          {filterPublished().map(item => {
            return (
              <li>
                <Link to={`/categories/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </>
      )
  );
}

const mapStateToProps = state => ({
  categories: state.categories
});

export const Shop = connect(mapStateToProps)(ShopComponent);
