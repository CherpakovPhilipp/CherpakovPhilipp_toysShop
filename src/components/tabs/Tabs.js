import { TabContent , TabNav } from './'; //Если не указано конкретное имя файла, поиск будет вестись внутри index.js
import PropTypes from 'prop-types';

export class Tabs extends Component {
  state={
    selectedIndex: 0
  }
  
  componentDidMount() {
    console.log(this.props);
  }

  changeTab = (selectedIndex) => {
    this.setState({ selectedIndex });
  }

  render() {
    const { selectedIndex } = this.state;
    const tabs = this.props.children.filter(tab => tab.type === TabContent);
    const list = tabs.map(tab => tab.props.title);
    const currentTab = tabs[selectedIndex] & tabs[selectedIndex].props.children; 

    return (
      <div className="tabs">
        <TabNav 
          select={this.changeTab} 
          activeIndex={this.state.selectedIndex}
          list={list}
        />
        <div className="tab-content">{currentTab}</div>
      </div>
    )
  }
}
