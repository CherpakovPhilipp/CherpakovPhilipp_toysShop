import { connect } from 'react-redux';

import { ListWithControls } from '../../components/listWithControls';
import { ListWithFilter } from '../../components/listWithFilter';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal';
import { setCategoryAsync, updateCategoryAsync } from '../../store/categories';
import { setProductsAsync, updateProductAsync } from '../../store/products';

const { useEffect, useState } = React;

const NewCategoryComponent = ({ dispatch, match, history, category, products }) => {
  const [modalWarning, setModalWarning] = useState('');
  const [removalId, setRemovalId] = useState('');
  const [published, setPublished] = useState(false);
  
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

  const changePublishedStatus = () => {
    const id = removalId;

    if (published) {
      const product = products.find(item => item.id === id);

      if (!category.products) category.products = [];
      category.products.push({ title: product.title, id: product.id,  })
    } else {
      let poductIndex;

      category.products.forEach((item, index) => {
        if (item.id === id) poductIndex = index;
      });
      category.products.splice(poductIndex, 1);
    }

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
    category && products ?
    <>
      <h1>Category {category.title}</h1>
      <div className="products">
        <div className="published">
          <h2>Published products</h2>
          <ListWithControls
            items={filterPublished()}
            onEdit={onEdit}
            onDelete={(id, title) => showModal(id, title, false)}
            onTitleClick={onTitleClick}
          />
        </div>
        <div className="unpublished">
          <h2>Products</h2>
          <ListWithFilter
            items={filterUnpublished()}
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
