import { Loader } from '../loader';
import { TextBlock } from '../textBlock';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export class ListWithControls extends Component {
  state = {
    itemInEdit: null
  };

  onClickEdit = (id) => {
    this.setState({ itemInEdit: id });
  }

  onClickDelete = (id) => {
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
  
  render () {
    const { items, hideEdit } = this.props;
  
    return (
      <>
        {
          !items ? <Loader /> :
          <>
            <ul className="list_with_controls">
              {items.map(item => (
                <li key={item.id}>
                  <TextBlock
                    initialText={item.title}
                    onTextEdit={text => this.handleTileChange(item.id, text)}
                    inEdit={this.state.itemInEdit === item.id ? true : false}
                    onClick={() => this.handleTitleClick(item.id)}
                  />
                  <FaEdit 
                    className="edit" 
                    onClick={() => this.onClickEdit(item.id)}
                  />
                  {
                    hideEdit ? <></> :
                    <FaTrashAlt 
                      className="remove"
                      onClick={() => this.onClickDelete(item.id)} 
                    />
                  }
                </li>
              ))}
            </ul>
          </>
        }
      </>
    );
  }
};
