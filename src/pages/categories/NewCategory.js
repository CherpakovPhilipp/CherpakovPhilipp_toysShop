import { connect } from 'react-redux';

import { ListWithControls } from '../../components/listWithControls';
import { ListWithFilter } from '../../components/listWithFilter';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal';
import { updateCategoryAsync } from '../../store/categories';
import { setProductsAsync, updateProductAsync } from '../../store/products';

const { useEffect, useState, useRef } = React;

const NewCategoryComponent = ({ dispatch, match, history, category, products }) => {
  const [modalWarning, setModalWarning] = useState('');
  const [removalId, setRemovalId] = useState('');
  const [published, setPublished] = useState(false);
  const [productsCur, setProductsCur] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('New category');

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    setProductsCur(products);
  }, [products]);

  const getInitialData = () => {
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

  const changePublishedStatus = () => {
    const id = removalId;

    if (published) {
      let productIndex;
      const product = productsCur.find(item => item.id === id);

      productsCur.forEach((item, index) => {
        if (item.id === id) productIndex = index;
      });

      const productsCurCopy = productsCur.slice();
      productsCurCopy.splice(productIndex, 1);

      setCategoryProducts([...categoryProducts, { id: products.length, title: product.title }]);
      setProductsCur(productsCurCopy);
    } else {
      let productIndex;

      categoryProducts.forEach((item, index) => {
        if (item.id === id) productIndex = index;
      });

      const categoryProductsCopy = categoryProducts.slice();
      categoryProductsCopy.splice(productIndex, 1);
      setCategoryProducts(categoryProductsCopy);
    }
  }

  const filterUnpublished = () => {
    if (!categoryProducts.length) return products;

    //setProductsCur(productsCur);
    return productsCur.filter(item => !categoryProducts.includes(item.title));
  }

  const showModal = (removalId, title, publish) => {
    setModalWarning(`You are trying to remove ${title}`);
    setRemovalId(removalId);
    setPublished(publish);
  }

  const hideModal = () => {
    setModalWarning('');
    setRemovalId('');
    setPublished(false);
  }

  return (
    products ?
    <>
      <h1>Category {categoryTitle}</h1>
      <div className="products">
        <div className="published">
          <h2>Products added to category</h2>
          {!categoryProducts.length && <i>There are no products in category</i>}
          <ListWithControls
            items={categoryProducts}
            onEdit={onEdit}
            onDelete={(id, title) => showModal(id, title, false)}
            onTitleClick={onTitleClick}
          />
        </div>
        <div className="unpublished">
          <h2>Products</h2>
          <ListWithFilter
            items={productsCur}
            onSelect={(id, title) => showModal(id, title, true)}
          />
        </div>
      </div>
      <Modal
        open={Boolean(modalWarning)}
        close={hideModal}
        onConfirm={changePublishedStatus}
      >
        {modalWarning}
      </Modal>
    </>
    : <Loader />
  )
};

const mapStateToProps = state => ({ category: state.category, products: state.products });

export const NewCategory = connect(mapStateToProps)(NewCategoryComponent);
