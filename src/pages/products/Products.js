import './products.scss';
import { Link } from 'react-router-dom';
import { getProductsService } from '../../services/productsService';

export class Products extends Component {
  state = {
    products: [],
    inputVal: ''
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    getProductsService()
      .then(data => {
        this.products = data;
        this.setState({ products: data });
      })
  }

  setInputVal = ({ target }) => {
    this.setState({ inputVal: target.value });
  }

  filterProducts = product => product.title.toLocaleLowerCase().includes(this.state.inputVal.toLocaleLowerCase())

  render() {
    const { products, inputVal } = this.state;

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
                  <img src="/images/edit.svg" className="edit" />
                  <img src="/images/cross.svg" className="remove" />
                </div>
                <img src={product.image ? product.image : "/images/product-stub.png"} alt={product.title}/>
              </div>
              <span className="product-title">{product.title}</span>
              </li>
            )
          )}
        </ul>
        <Link to="/new-product">Add new</Link>
      </>
    )
  }
}
