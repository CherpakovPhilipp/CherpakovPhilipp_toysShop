import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { setProducts } from '../../store/products';
import { getProductsService } from '../../services/productsService';

import './products.scss';

export class ProductsComponent extends Component {
  state = {
    inputVal: ''
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
          {products.filter(this.filterProducts)
            .map(product => (
              <li
                key={product.title}
              >
                <div className="product-box">
                  <div className="product-controls">
                    <FaEdit className="edit" />
                    <FaTrashAlt className="remove" />
                  </div>
                  <img src={product.image ? product.image : '/images/product-stub.png'} alt={product.title} />
                </div>
                <span className="product-title">{product.title}</span>
              </li>
            ))}
        </ul>
        <Link to="/new-product">Add new</Link>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export const Products = connect(mapStateToProps)(ProductsComponent);
