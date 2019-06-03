import { connect } from 'react-redux';

import { ListWithControls } from '../../components/listWithControls';
import { getCategoriesService, updateCategoryService, deleteCategoryService } from '../../services/categoriesService';
import { setCategories } from '../../store/categories';

export class CategoriesComponent extends Component {
  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    const { dispatch } = this.props;

    getCategoriesService()
      .then((data) => { dispatch(setCategories(data)) });
  }

  onEdit = (id, title) => {
    const { categories } = this.props;

    const category = categories.find(item => item.id === id);
    category.title = title;

    updateCategoryService(id, category)
      .then(() => {
        //this.setState({ itemInEdit: null });
        this.getCategories();
      });
  }

  onDelete = (id) => {
    deleteCategoryService(id)
      .then(() => this.getCategories());
  }

  onTitleClick = (id) => {
    const { history } = this.props;

    history.push(`/categories/${id}`);
  }


  render() {
    const { categories } = this.props;

    return (
      <>
        <h1>Categories</h1>
        <ListWithControls 
          items={categories} 
          onEdit={this.onEdit} 
          onDelete={this.onDelete}
          onTitleClick={this.onTitleClick}
        />
      </>
    );
  }
};

const mapStateToProps = state => ({
  categories: state.categories
});

export const Categories = connect(mapStateToProps)(CategoriesComponent);
