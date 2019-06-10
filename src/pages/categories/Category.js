import { connect } from 'react-redux';

import { ListWithControls } from '../../components/listWithControls';
import { ListWithFilter } from '../../components/listWithFilter';
import { Loader } from '../../components/loader';
import { setCategoryAsync, updateCategoryAsync } from '../../store/categories';
import { setProductsAsync, updateProductAsync } from '../../store/products';

const { useEffect } = React;

const CategoryComponent = ({ dispatch, match, history, category, products }) => {
  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    dispatch(setCategoryAsync(match.params.id));
    dispatch(setProductsAsync());
  }

  const onEdit = (id, title) => {
    const product = category.products.find(item => item.id === id);

    product.title = title;
    dispatch(updateProductAsync([id, category]));
  }

  const onTitleClick = (id) => {
    history.push(`/products/${id}`);
  }

  const changePublishedStatus = (id, published) => {
    if (!category.products) category.products = [];

    const product = products.find(item => item.id === id);
    let poductIndex;

    category.products.forEach((item, index) => {
      if (item.id === id) poductIndex = index;
    })

    published ? category.products.push({ title: product.title, id: product.id,  }) : category.products.splice(poductIndex, 1);

    dispatch(updateCategoryAsync([category.id, category]));
    dispatch(setProductsAsync());
  }

  const filterPublished = () => {
    return category.products;
  }

  const filterUnpublished = () => {
    if (!category.products) return products;
    const titlesArr = category.products.map(item => item.title);

    return products.filter(item => !titlesArr.includes(item.title));
  }

  return (
    category && products ?
    <>
      <h1>Category {category.title}</h1>
      <div className="products">
        <div className="published">
          <h2>Published products</h2>
          <ListWithControls
            items={filterPublished()}
            onEdit={onEdit}
            onDelete={id => changePublishedStatus(id, false)}
            onTitleClick={onTitleClick}
          />
        </div>
        <div className="unpublished">
          <h2>Products</h2>
          <ListWithFilter
            items={filterUnpublished()}
            onSelect={id => changePublishedStatus(id, true)}
          />
        </div>
      </div>
    </>
    : <Loader />
  )
};

const mapStateToProps = state => ({ category: state.category, products: state.products });

export const Category = connect(mapStateToProps)(CategoryComponent);
