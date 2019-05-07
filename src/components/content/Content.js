import './content.scss';

import { Context } from '../../context.js';

import { Button } from '../button';
import { TogglePanels } from '../togglePanels';
import { TaskList } from '../taskList';
import { List } from '../list';
import { Location } from '../location';
import { Clock } from '../clock';
import { Form } from '../form';
import { SimpleInput } from '../simpleInput';
import { TodoList } from '../todoList';

const Switcher = () => (
  <Context.Consumer>
    {
      theme => <button type="button" onClick={theme.switch}>Switch theme</button>
    }
  </Context.Consumer>
);

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="content">
        <Button />
        <TogglePanels />
        <TaskList userName="Philipp" />
        <List list={this.state.users} field="name" numered />
        <Location />
        <Switcher />
        <Clock />
        <Form exclude={[]} disabled={[]} />
        <SimpleInput showInputText={console.log} />
        <TodoList />
      </div>
    );
  }
}
