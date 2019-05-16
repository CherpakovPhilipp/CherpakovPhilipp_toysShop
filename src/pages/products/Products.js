import { tasks as products } from '../taskList/tasks.js';

export class Products extends Component {
  state = { products };

  componentDidMount() {
    //this.getProducts();
  }

  getProducts= () => {
    fetch('/db/products.json', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) throw new Error('Problems with fetch!');

        return response.json();
      })
      .then((data) => {
        this.products = data;
        this.setState({ products: data });
      });
  }

  render() {
    return (
      <>
        {this.state.products.map(day => (
          <>
            <ul className="todos">
              {day.map(todo => (
                  <li
                    key={todo.id}
                    className={todo.done ? 'finished' : 'unfinished'}
                  >
                    <span className="todo-title">{todo.title}</span>
                    <div className="todo-controls">
                      <input type="button" value="X" />
                      <input type="button" value="V" />
                      <input type="button" value="~" />
                    </div>
                  </li>
                )
              )}
            </ul>
            <input type="button" value="Добавить новый" />
          </>
        ))}
      </>
    )
  }
}
