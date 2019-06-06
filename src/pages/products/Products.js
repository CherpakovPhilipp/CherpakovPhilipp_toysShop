import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { setProductsAsync, removeProductAsync, updateProductAsync } from '../../store/products';
import { TextBlock } from '../../components/textBlock';
import { Modal } from '../../components/modal';

import './products.scss';

export class ProductsComponent extends Component {
  state = {
    inputVal: '',
    itemInEdit: null,
    modalWarning: '',
    removalId: '',
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    this.props.dispatch(setProductsAsync());
  }

  setInputVal = ({ target }) => {
    this.setState({ inputVal: target.value });
  }

  filterProducts = product => product.title.toLocaleLowerCase().includes(this.state.inputVal.toLocaleLowerCase())

  onClickEdit = (id) => {
    this.setState({ itemInEdit: id });
  }

  onClickDelete = () => {
    const { removalId } = this.state;

    this.props.dispatch(removeProductAsync(removalId));
  }

  handleTileChange = (id, title) => {
    const { dispatch } = this.props;
    const product = this.props.products.find(item => item.id === id);
    product.title = title;

    dispatch(updateProductAsync([id, product]));
  }

  handleTitleClick = (id) => {
    const { history } = this.props;

    history.push(`/products/${id}`);
  }

  showModal = (removalId, title) => {
    this.setState({ modalWarning: `You are trying to remove ${title}`, removalId });
  }

  hideModal = () => {
    this.setState({ modalWarning: '', removalId: '' });
  }

  render() {
    const { inputVal, modalWarning } = this.state;
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
                        onClick={() => this.showModal(product.id, product.title)}
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
        <Modal
          open={Boolean(modalWarning)}
          close={this.hideModal}
          onConfirm={this.onClickDelete}
        >
          {modalWarning}
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export const Products = connect(mapStateToProps)(ProductsComponent);
