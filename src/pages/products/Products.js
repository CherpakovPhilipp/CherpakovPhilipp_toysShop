import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { setProducts, removeProduct } from '../../store/products';
import { getProductsService, deleteProductService, updateProductService } from '../../services/productsService';
import { TextBlock } from '../../components/textBlock';


import './products.scss';

export class ProductsComponent extends Component {
  state = {
    inputVal: '',
    itemInEdit: null
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    getProductsService()
      .then((data) => {
        this.products = data;
        this.props.dispatch(setProducts(data));
      });
  }

  setInputVal = ({ target }) => {
    this.setState({ inputVal: target.value });
  }

  filterProducts = product => product.title.toLocaleLowerCase().includes(this.state.inputVal.toLocaleLowerCase())

  onClickEdit = (id) => {
    this.setState({ itemInEdit: id });
  }

  onClickDelete = (id) => {
    deleteProductService(id)
      .then(() => {
        this.props.dispatch(removeProduct(id));
      });
  }

  handleTileChange = (id, title) => {
    const product = this.products.find(item => item.id === id);
    product.title = title;

    updateProductService(id, product)
      .then(() => {
        this.setState({ itemInEdit: null });
        this.getProducts();
      });
  }

  handleTitleClick = (id) => {
    const { history } = this.props;

    history.push(`/products/${id}`);
  }

  render() {
    const { inputVal } = this.state;
    const { products } = this.props;

    return (
      <>
        <h1>Products</h1>
        <input
          type="text"
          onChange={this.setInputVal}
          value={inputVal}
          className="filter"
        />
        <ul className="products">
          {
            products.filter(this.filterProducts)
              .map(product => (
                <li key={product.title}>
                  <div className="product-box">
                    <div className="product-controls">
                      <FaEdit
                        className="edit"
                        onClick={() => this.onClickEdit(product.id)}
                      />
                      <FaTrashAlt
                        className="remove"
                        onClick={() => this.onClickDelete(product.id)}
                      />
                    </div>
                    <img src={product.image ? product.image : '/images/product-stub.png'} alt={product.title} />
                  </div>
                  <TextBlock
                    initialText={product.title}
                    onTextEdit={text => this.handleTileChange(product.id, text)}
                    inEdit={this.state.itemInEdit === product.id}
                    onClick={() => this.handleTitleClick(product.id)}
                  />
                </li>
              ))
          }
        </ul>
        <Link to="/products/new">Add new</Link>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export const Products = connect(mapStateToProps)(ProductsComponent);
