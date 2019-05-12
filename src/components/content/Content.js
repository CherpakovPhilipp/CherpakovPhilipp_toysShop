import './content.scss';

import { TaskList } from '../taskList';
import { List } from '../list';
import { TabContent, Tabs } from '../tabs';
import { SimpleSlider } from '../simpleSlider';
import { ProductInfo } from '../productInfo';

export class Content extends Component {
  state = {
    users: [],
    selectedIndex: 1
  };

  componentDidMount() {
    this.getUsers();
    setTimeout(() => {console.log(this.state.selectedIndex);this.setState({ selectedIndex: 0 })}, 5000);
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="content">
        <Tabs selectedIndex={this.state.selectedIndex}>
          <TabContent title="Users">
            <List list={this.state.users} field="name" />
          </TabContent>
          <TabContent title="Gallery">
            <SimpleSlider />
          </TabContent>
        </Tabs>
        <TaskList />
        <ProductInfo />
      </div>
    );
  }
}
