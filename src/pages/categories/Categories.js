import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ListWithControls } from '../../components/listWithControls';
import { ListWithFilter } from '../../components/listWithFilter';
import { Loader } from '../../components/loader';
import { Modal } from '../../components/modal';
import { setCategoriesAsync, updateCategoryAsync } from '../../store/categories';

import './categories.scss';

const { useEffect, useState } = React;

export const CategoriesComponent = ({ dispatch, history, categories }) => {
  const [modalWarning, setModalWarning] = useState('');
  const [removalId, setRemovalId] = useState('');
  const [published, setPublished] = useState(false);
  
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    dispatch(setCategoriesAsync());
  }

  const onEdit = (id, title) => {
    const category = categories.find(item => item.id === id);

    category.title = title;

    dispatch(updateCategoryAsync([id, category]));
  }

  const onTitleClick = (id) => {
    history.push(`/categories/${id}`);
  }

  const changePublishedStatus = () => {
    const id = removalId;
    const category = categories.find(item => item.id === id);

    category.published = published;

    dispatch(updateCategoryAsync([id, category]));
  }

  const filterPublished = () => {
    return categories.filter(item => item.published);
  }

  const filterUnpublished = () => {
    return categories.filter(item => !item.published);
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
    !categories ? <Loader />
      : (
        <>
          <h1>Categories</h1>
          <div className="categories">
            <div className="published">
              <h2>Published categories</h2>
              <ListWithControls
                items={filterPublished()}
                onEdit={onEdit}
                onDelete={(id, title) => showModal(id, title, false)}
                onTitleClick={onTitleClick}
              />
            </div>
            <div className="unpublished">
              <h2>Unpublished categories</h2>
              <ListWithFilter
                items={filterUnpublished()}
                onSelect={(id, title) => showModal(id, title, true)}
              />
            </div>
          </div>
          <Link to="/new-category">New category</Link>
          <Modal
            open={Boolean(modalWarning)}
            close={hideModal}
            onConfirm={changePublishedStatus}
          >
            {modalWarning}
          </Modal>
        </>
      )
  );
}

const mapStateToProps = state => ({
  categories: state.categories
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
