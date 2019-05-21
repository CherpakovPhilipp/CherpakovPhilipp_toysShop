import './products.scss';
import { Link } from 'react-router-dom';
import { server } from '../../services';

export class Products extends Component {
  state = {
    products: [],
    inputVal: ''
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    server.get('public/products')
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
