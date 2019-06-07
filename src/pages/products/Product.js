import { connect } from 'react-redux';

import { setProductAsync, updateProductAsync, cleanProduct } from '../../store/products';
import { TextBlock } from '../../components/textBlock';
import { Loader } from '../../components/loader';

export class ProductComponent extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props;

    dispatch(setProductAsync(match.params.id));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(cleanProduct());
  }

  handleTextChange = (id, text, field) => {
    const { dispatch, product } = this.props;

    product[field] = text;
    dispatch(updateProductAsync([id, product]));
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
