import './taskList.scss';
import { tasks } from './tasks.js';
import { TabContent, Tabs } from '../../components/tabs';

export class TaskList extends Component {
  state = { tasks };
  days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

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

  getCurDay() {
    const dayIndex = (new Date()).getDay();
    if (dayIndex === 0) return 6;

    return dayIndex - 1;
  }

  render() {
    return (
      <>
        <Tabs selectedIndex={this.getCurDay()}>
          {this.state.tasks.map((day, index) => (
              <TabContent title={this.days[index]} key={index}>
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
              </TabContent>
            )
          )}
        </Tabs>
      </>
    )
  }
}
