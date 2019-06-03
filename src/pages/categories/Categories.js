import { connect } from 'react-redux';

import { ListWithControls } from '../../components/listWithControls';
import { ListWithFilter } from '../../components/listWithFilter';
import { Loader } from '../../components/loader';
import { getCategoriesService, updateCategoryService, deleteCategoryService } from '../../services/categoriesService';
import { setCategories } from '../../store/categories';

import './categories.scss';

export class CategoriesComponent extends Component {
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    const { dispatch } = this.props;

    getCategoriesService()
      .then((data) => { dispatch(setCategories(data)); });
  }

  onEdit = (id, title) => {
    const { categories } = this.props;
    const category = categories.find(item => item.id === id);

    category.title = title;

    updateCategoryService(id, category)
      .then(() => this.getCategories());
  }

  onDelete = (id) => {
    deleteCategoryService(id)
      .then(() => this.getCategories());
  }

  onTitleClick = (id) => {
    const { history } = this.props;

    history.push(`/categories/${id}`);
  }

  changePublishedStatus = (id, published) => {
    const { categories } = this.props;
    const category = categories.find(item => item.id === id);

    category.published = published;

    updateCategoryService(id, category)
      .then(() => this.getCategories());
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
