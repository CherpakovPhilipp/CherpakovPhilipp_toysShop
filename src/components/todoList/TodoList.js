import './todoList.scss';

export class TodoList extends Component {
  state = {
    todos: [],
    inputVal: ''
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) throw new Error('Problems with fetch!');

        return response.json();
      })
      .then((data) => {
        this.todos = data;
        this.setState({ todos: data });
      });
  }

  setInputVal = ({ target }) => {
    this.setState({ inputVal: target.value });
  }

  filterTodos = todo => todo.title.includes(this.state.inputVal)

  render() {
    return (
      <ul className="todos">
        <li>
          <input
            type="text"
            onChange={this.setInputVal}
            value={this.state.inputVal}
            className="filter"
          />
        </li>
        {this.state.todos
          .filter(this.filterTodos)
          .map(item => (
            <li
              key={item.id}
              className={item.completed ? 'finished' : 'unfinished'}
            >
              <span className="todo-title">{item.title}</span>
              <div className="todo-controls">
                <input type="button" value="X" />
                <input type="button" value="V" />
                <input type="button" value="~" />
              </div>
            </li>
          ))
      }
      </ul>
    );
  }
}
