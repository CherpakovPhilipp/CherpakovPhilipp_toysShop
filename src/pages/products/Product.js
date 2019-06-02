import { connect } from 'react-redux';

import { TextBlock } from '../../components/textBlock';
import { getProductService } from '../../services/productsService';
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

    dispatch(cleanProduct())
  }

  render() {
    const { product } = this.props;

    return (
      !product ? <Loader />
      :
      <div className="product-info">
        <h1>
          <span>Title </span>
          <TextBlock
            initialText={product.title}
            showInputText={console.log}
          />
        </h1>
        <div>
          <span>$</span>
          <TextBlock
            initialText={product.price}
            showInputText={console.log}
        />
        </div>
        <div>
          <TextBlock
            initialText={product.description}
            showInputText={console.log}
          />
        </div>
        <input type="button" value="Save" />
      </div>
    );
  }
}

const mapStateToProps = state => ({ product: state.product });

export const Product = connect(mapStateToProps)(ProductComponent);
