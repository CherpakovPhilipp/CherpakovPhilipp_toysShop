import { TextBlock } from '../../components/textBlock';

export class ProductInfo extends Component {
  render() {
    return (
      <div className="product-info">
        <h2>Title</h2>
        <TextBlock initialText="Product1" showInputText={console.log} />
        <strong>$</strong>
        <TextBlock initialText="12" showInputText={console.log} />
        <TextBlock initialText="est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla" showInputText={console.log} />
        <input type="button" value="Save" />
      </div>
    )
  }
}
