import { connect } from 'react-redux';

import { ListWithControls } from '../../components/listWithControls';
import { ListWithFilter } from '../../components/listWithFilter';
import { TextBlock } from '../../components/textBlock';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal';
import { setProductsAsync, updateProductAsync } from '../../store/products';
import { createCategoryAsync } from '../../store/categories';

const { useEffect, useState } = React;

const NewCategoryComponent = ({ dispatch, history, category, products }) => {
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
    if (published) {
      const product = productsCur.find(item => item.id === removalId);
      setCategoryProducts([...categoryProducts, { id: product.id , title: product.title }]);

      let productIndex;
      productsCur.forEach((item, index) => {
        if (item.id === removalId) productIndex = index;
      });

      const productsCurCopy = productsCur.slice();
      productsCurCopy.splice(productIndex, 1);
      setProductsCur(productsCurCopy);
    } else {
      categoryProducts.forEach((item, index) => {
        if (item.id === removalId) productIndex = index;
      });

      let productIndex;
      const categoryProductsCopy = categoryProducts.slice();
      categoryProductsCopy.splice(productIndex, 1);
      setCategoryProducts(categoryProductsCopy);

      const productsCurCopy = productsCur.slice();
      productsCurCopy.push(categoryProducts[productIndex]);
      setProductsCur(productsCurCopy);
    }
  }

  const showModal = (removalId, title, publish) => {
    setRemovalId(removalId);
    setPublished(publish);
    setModalWarning(`You are trying to remove ${title}`);
  }

  const hideModal = () => {
    setRemovalId('');
    setPublished(false);
    setModalWarning('');
  }

  const handleTitleChange = (title) => {
    setCategoryTitle(title);
  }

  const saveCategory = () => {
    dispatch(createCategoryAsync({ title: categoryTitle, products: categoryProducts }));
    history.push('/categories');
  }

  return (
    !products ? <Loader /> : 
    <>
      <h1>
        Category 
        <TextBlock
          initialText={categoryTitle}
          onTextEdit={text => handleTitleChange(text)}
        />
      </h1>
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
      <button
        type="submit"
        onClick={saveCategory}
      >
        Save
      </button>
      <Modal
        open={Boolean(modalWarning)}
        close={hideModal}
        onConfirm={changePublishedStatus}
      >
        {modalWarning}
      </Modal>
    </>
  )
};

const mapStateToProps = state => ({ category: state.category, products: state.products });

export const NewCategory = connect(mapStateToProps)(NewCategoryComponent);
