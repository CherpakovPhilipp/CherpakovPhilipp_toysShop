import './products.scss';
import { Link } from 'react-router-dom';

const products = ["Bicycle", "Car", "Super-hero", "Doll", "Teddy", "Lego", "Pistols", "Table-game"];

export class Products extends Component {
  state = {
    products,
    inputVal: ''
  };

  componentDidMount() {
    //this.getProducts();
  }

  getProducts= () => {
    fetch('/db/products.json', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) throw new Error('Problems with fetch!');

        return response.json();
      })
      .then((data) => {
        this.products = data;
        this.setState({ products: data });
      });
  }

  setInputVal = ({ target }) => {
    this.setState({ inputVal: target.value });
  }

  filterProducts = product => product.toLocaleLowerCase().includes(this.state.inputVal.toLocaleLowerCase())

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
                key={product}
              >
              <div className="product-box">
                <div className="product-controls">
                  <object type="image/svg+xml" data="/images/edit.svg" className="edit"></object>
                  <object type="image/svg+xml" data="/images/cross.svg" className="remove"></object>
                </div>
                <img src="/images/product-stub.png" alt={product}/>
              </div>
              <span className="product-title">{product}</span>
              </li>
            )
          )}
        </ul>
        <Link to="/new-product">Add new</Link>
      </>
    )
  }
}
