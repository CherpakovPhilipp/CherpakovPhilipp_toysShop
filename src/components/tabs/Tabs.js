import './tabs.scss';
import { TabContent , TabNav } from './'; //Если не указано конкретное имя файла, поиск будет вестись внутри index.js
import PropTypes from 'prop-types';

export class Tabs extends Component {
  state = {
    selectedIndex: this.props.selectedIndex ? this.props.selectedIndex : 0
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({ selectedIndex: this.props.selectedIndex });
    }
  }

  changeTab = (selectedIndex) => {
    this.setState({ selectedIndex });
  }

  render() {
    const { selectedIndex } = this.state;
    const tabs = this.props.children.filter(tab => tab.type === TabContent);
    const titles = tabs.map(tab => tab.props.title);
    const currentTab = tabs[selectedIndex] && tabs[selectedIndex].props.children;

    return (
      <div className="tabs">
        <TabNav
          select={this.changeTab}
          activeIndex={this.state.selectedIndex}
          titles={titles}
        />
        <div className="tab-content">{currentTab}</div>
      </div>
    )
  }
}
