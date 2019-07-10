import { FaSearch } from 'react-icons/fa';

import './listWithFilter.scss';

export class ListWithFilter extends Component {
  state = {
    inputVal: ''
  };

  setInputVal = ({ target }) => {
    this.setState({ inputVal: target.value });
  }

  handleDoubleClick = (id) => {
    const { onSelect } = this.props;

    onSelect(id);
  }

  filterItems = item => item.title.toLocaleLowerCase().includes(this.state.inputVal.toLocaleLowerCase())

  render() {
    const { inputVal } = this.state;
    const { items } = this.props;

    return (
      <div className="filter-list">
        <input
          type="text"
          placeholder="Search"
          onChange={this.setInputVal}
          value={inputVal}
          className="filter"
        />
        <FaSearch className="icon-search" />
        <ul>
          {items.filter(this.filterItems)
            .map(item => (
              <li
                key={item.title}
                onDoubleClick={() => this.handleDoubleClick(item.id, item.title)}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
