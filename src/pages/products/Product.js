import { connect } from 'react-redux';

import { getProductService, updateProductService } from '../../services/productsService';
import { TextBlock } from '../../components/textBlock';
import { setProduct, cleanProduct } from '../../store/products';
import { Loader } from '../../components/loader';

export class ProductComponent extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props;

    getProductService(match.params.id)
      .then((data) => {
        dispatch(setProduct(data));
      });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(cleanProduct());
  }

  handleTextChange = (id, text, field) => {
    const { match, dispatch, product } = this.props;

    product[field] = text;

    updateProductService(id, product)
      .then(() => {
        getProductService(match.params.id)
          .then((data) => {
            dispatch(setProduct(data));
          });
      });
  }

  render() {
    const { product } = this.props;

    return (
      !product ? <Loader />
        : (
          <div className="product-info">
            <h1>
              <span>Title </span>
              <TextBlock
                initialText={product.title}
                onTextEdit={text => this.handleTextChange(product.id, text, 'title')}
              />
            </h1>
            <div>
              <span>$</span>
              <TextBlock
                initialText={product.price}
                onTextEdit={text => this.handleTextChange(product.id, text, 'price')}
              />
            </div>
            <div>
              <TextBlock
                initialText={product.description}
                onTextEdit={text => this.handleTextChange(product.id, text, 'description')}
              />
            </div>
            <input type="button" value="Save" />
          </div>
        )
    );
  }
}

const mapStateToProps = state => ({ product: state.product });

export const Product = connect(mapStateToProps)(ProductComponent);
