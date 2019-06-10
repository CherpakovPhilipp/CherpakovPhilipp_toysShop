import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { TextBlock } from '../textBlock';

import './listWithControls.scss';

export class ListWithControls extends Component {
  state = {
    itemInEdit: null
  };

  handleEditClick = (itemInEdit) => {
    this.setState({ itemInEdit });
  }

  handleDeleteClick = (id) => {
    const { onDelete } = this.props;

    onDelete(id);
  }

  handleTileChange = (id, title) => {
    const { onEdit } = this.props;

    onEdit(id, title);
    this.setState({ itemInEdit: null });
  }

  handleTitleClick = (id) => {
    const { onTitleClick } = this.props;

    onTitleClick(id);
  }

  render() {
    const { items, hideEdit } = this.props;

    return (
      <ul className="controls-list">
        {items && items.map(item => (
          <li key={item.title}>
            <TextBlock
              initialText={item.title}
              onTextEdit={text => this.handleTileChange(item.id, text)}
              inEdit={this.state.itemInEdit === item.id}
              onClick={() => this.handleTitleClick(item.id)}
            />
            <FaEdit
              className="icon-edit"
              onClick={() => this.handleEditClick(item.id)}
            />
            {
              !hideEdit
              && (
              <FaTrashAlt
                className="icon-remove"
                onClick={() => this.handleDeleteClick(item.id)}
              />
              )
            }
          </li>
        ))}
      </ul>
    );
  }
}
