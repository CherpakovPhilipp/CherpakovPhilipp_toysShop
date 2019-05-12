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
import { TabContent, Tabs } from '../tabs';
import { Gallery } from '../gallery';
import { SimpleSlider } from '../simpleSlider';


const tabs = [
  {id: 0, title: 'Tab 1', content: 'Some text is here'},
  {id: 1, title: 'Tab 2', content: 'Another content'},
  {id: 2, title: 'Tab 1', content: 'Third text'}
];

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
        <img src="/images/gallery-1.jpg" alt=""/>
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
        <Tabs selectedIndex={2}>
          <TabContent title="Tab 1">
            <h1>Users</h1>
            <List list={this.state.users} field="name" numered />
          </TabContent>
          <TabContent title="Tab 2">
            <h1>Gallery</h1>
            <Gallery />
          </TabContent>
          <TabContent title="Tab 3">
            <h1>Slider</h1>
            <SimpleSlider />
          </TabContent>
        </Tabs>
      </div>
    );
  }
}
