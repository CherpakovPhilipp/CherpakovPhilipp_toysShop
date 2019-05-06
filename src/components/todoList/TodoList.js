import './todoList.scss';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.getTodos();
  }
  
  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1', { method: 'GET' })
      .then(response => {
        if (response.status !== 200) throw new Error('Problems with fetch!');

        return response.json();
      })
      .then(data => {
        this.todos = data;
        this.setState({ todos: data });
      });
  }

  searchTodos = ({ target }) => {
    const todosFiltered = this.state.todos.filter(item => {
      return item.title.includes(target.value);
    });

    this.setState({ 
      todos: todosFiltered,
      inputValue: target.value
    });
  }

  clearSerch = () => {
    this.setState({ todos: this.todos})
  }

  render() {
    return (
      <>
      <input 
        type="text"
        onChange={this.searchTodos}
        onBlur={this.clearSerch}
        value={this.state.inputValue}
      />
      <ul className="todos">
        {this.state.todos.map((item, index) => {
          const li = (
            <li 
              key={item.id} 
              completed={item.completed} 
              className={item.completed ? 'finished' : 'unfinished'} 
            >
              {item.title}
              <input type="button" value='X' />
              <input type="button" value='V' />
              <input type="button" value='~' />
            </li>
          ) 

          return li;
        })}
      </ul>
      </>
    )
  }
}