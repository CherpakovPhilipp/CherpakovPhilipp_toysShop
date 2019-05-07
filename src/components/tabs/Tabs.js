import { TabNav } from './TabNav';

export class Tabs extends Component {
  state = { selectedIndex: 0 }

  changeTab = (selectedIndex) => {
    this.setState({ selectedIndex });
  }

  render() {
    const { selectedIndex } = this.state;
    const { list } = this.props;

    return (
      <div>
        <TabNav list={list} select={this.changeTab} />

        <div className="tab">
          {list[selectedIndex].content}
        </div>
      </div>
    );
  }
}