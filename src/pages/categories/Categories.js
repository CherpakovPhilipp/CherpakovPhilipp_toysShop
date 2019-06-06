import { connect } from 'react-redux';

import { ListWithControls } from '../../components/listWithControls';
import { ListWithFilter } from '../../components/listWithFilter';
import { Loader } from '../../components/loader';
import { setCategoriesAsync, updateCategoryAsync, deleteCategoryAsync } from '../../store/categories';

import './categories.scss';

export class CategoriesComponent extends Component {
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    const { dispatch } = this.props;

    dispatch(setCategoriesAsync());
  }

  onEdit = (id, title) => {
    const { categories, dispatch } = this.props;
    const category = categories.find(item => item.id === id);

    category.title = title;

    dispatch(updateCategoryAsync([id, category]));
  }

  onDelete = (id) => {
    dispatch(deleteCategoryAsync(id));
  }

  onTitleClick = (id) => {
    const { history } = this.props;

    history.push(`/categories/${id}`);
  }

  changePublishedStatus = (id, published) => {
    const { categories, dispatch } = this.props;
    const category = categories.find(item => item.id === id);

    category.published = published;

    dispatch(updateCategoryAsync([id, category]));
  }

  filterPublished = () => {
    const { categories } = this.props;

    return categories.filter(item => item.published);
  }

  filterUnpublished = () => {
    const { categories } = this.props;

    return categories.filter(item => !item.published);
  }

  render() {
    const { categories } = this.props;

    return (
      !categories ? <Loader />
        : (
          <>
            <h1>Categories</h1>
            <div className="categories">
              <div className="published">
                <h2>Published categories</h2>
                <ListWithControls
                  items={this.filterPublished()}
                  onEdit={this.onEdit}
                  onDelete={id => this.changePublishedStatus(id, false)}
                  onTitleClick={this.onTitleClick}
                />
              </div>
              <div className="unpublished">
                <h2>Unpublished categories</h2>
                <ListWithFilter
                  items={this.filterUnpublished()}
                  onSelect={id => this.changePublishedStatus(id, true)}
                />
              </div>
            </div>
          </>
        )
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
