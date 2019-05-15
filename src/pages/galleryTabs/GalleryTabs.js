import './galleryTabs.scss';

import { List } from '../../list';
import { TabContent, Tabs } from '../../components/tabs';
import { SimpleSlider } from '../../simpleSlider';

export class GalleryTabs extends Component {
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
      <div className="tabs">
        <Tabs selectedIndex={this.state.selectedIndex}>
          <TabContent title="Users">
            <List list={this.state.users} field="name" />
          </TabContent>
          <TabContent title="Gallery">
            <SimpleSlider />
          </TabContent>
        </Tabs>
      </div>
    );
  }
}
