import './taskList.scss';
import { tasks } from './tasks.js';
import { TabContent, Tabs } from '../tabs';

export class TaskList extends Component {
  state = {
    tasks: tasks
  };

  componentDidMount() {
    //this.getTasks();
  }

  getTasks= () => {
    fetch('/db/tasks.json', { method: 'GET' })
      .then((response) => {
        if (response.status !== 200) throw new Error('Problems with fetch!');

        return response.json();
      })
      .then((data) => {
        this.tasks = data;
        this.setState({ tasks: data });
      });
  }

  render() {
    const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

    return (
      <>
        <Tabs selectedIndex={0}>
          {this.state.tasks.map((day, index) => {
            return (
              <TabContent title={days[index]} key={index}>
                <ul className="todos">
                  {day.map(todo => {
                    return (
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
                  })}
                </ul>
                <input type="button" value="Добавить новый" />
              </TabContent>
            )
          })}
        </Tabs>
      </>
    )
  }
}
