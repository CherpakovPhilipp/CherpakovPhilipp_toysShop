import './content.scss';

// import { NumbersList } from '../numbersList';
// import { User, Users } from '../usersList';
// import { Counter } from '../counter';
import { Button } from '../button';
import { TogglePanels } from '../togglePanels';
import { TaskList } from '../taskList';
import { List } from '../list';

import { Location } from '../location';

import { Context } from '../../context.js';

import { Clock } from '../clock';


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
        {/* <User firstName="Mark" lastName="Twen" age="14" className="user" /> */}
        {/* <Users users={users} /> */}
        {/* <NumbersList odd from="1" to="10" /> */}
        {/* <Counter /> */}
        <Button />
        <TogglePanels />
        <TaskList userName="Philipp" />
        <List list={this.state.users} field="name" numered />

        <Location />

        <Switcher />
        {/* <Clock /> */}

      </div>
    );
  }
}
