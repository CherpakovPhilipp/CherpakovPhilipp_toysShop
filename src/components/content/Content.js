import './content.scss';

import { NumbersList } from '../numbersList';
import { User, Users } from '../usersList';
import { Counter } from '../counter';

const users = [
  {
    id: 1, firstName: 'Patrik', lastName: 'Simpson', age: 15
  },
  {
    id: 2, firstName: 'Teresa', lastName: 'Stefenson', age: 19
  },
  {
    id: 3, firstName: 'Jhon', lastName: 'Clinton', age: 26
  },
  {
    id: 4, firstName: 'Alex', lastName: 'Geits', age: 19
  },
  {
    id: 5, firstName: 'Max', lastName: 'Jobs', age: 33
  },
  {
    id: 6, firstName: 'Nick', lastName: '', age: 55
  },
  {
    id: 7, firstName: 'Martha', lastName: 'Uejn', age: 12
  },
  {
    id: 8, firstName: 'Cristine', lastName: 'Pitt', age: 45
  },
];

export class TogglePanels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      butText: 'Show',
      panelClass: ''
    }
  }

  tooglePanel(){
    if (!this.state.panelClass) {
      this.setState({
        butText: 'Hide',
        panelClass: 'active'
      })
    } else {
      this.setState({
        butText: 'Show',
        panelClass: ''
      })
    }
  }

  render() {
    return (
      <div className="tab_panels">
        <button onClick={() => {this.tooglePanel()}}>{this.state.butText}</button>
        <p className={this.state.panelClass}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed mauris ut augue eleifend iaculis. Integer odio augue, dapibus nec quam ut, ornare eleifend risus. Suspendisse eu mi vel est scelerisque interdum eu eu est. Morbi malesuada condimentum urna, vel aliquet lacus feugiat eu. Quisque consequat elit libero. Etiam rhoncus sem facilisis eros gravida, et tristique ipsum rutrum. Mauris ultricies in odio non auctor. Fusce dapibus libero a sapien laoreet tempus. Mauris cursus nibh ut orci dignissim rhoncus. Nulla a mi ut dolor sodales pharetra. Aenean eget aliquam mi. Integer mattis mi non lacus porta malesuada. Ut neque mi, vulputate vel purus sit amet, tempor dignissim ante. Nullam vitae efficitur neque, sed pretium magna. Phasellus bibendum placerat purus ut tincidunt.</p>
      </div>
    )
  }
}

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'active'
    }
  };

  toggleActive() {
    this.state.isActive ? this.setState({isActive: ''}) : this.setState({isActive: 'active'})
  };

  render() {
    return (
      <>
        <button onClick={() => { this.toggleActive() }}>Toggle Class</button>
        <span className={this.state.isActive}></span>
      </>
    )
  }
}

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: 0,
      done: 0,
      inProgress: 0,
      waiting: 0,
    };
  }

  render() {
    return (
      <>
        <p>Hello, {this.props.userName}</p>
        <br/>
        <p>You have <b>{this.state.tasks}</b> tasks</p>
        <p>Done: <b>{this.state.done}</b></p>
        <p>In progress: <b>{this.state.inProgress}</b></p>
        <p>Waiting: <b>{this.state.waiting}</b></p>
        <br/>
        <a href="/Tasks">Go to the tasks list</a>
      </>
    );
  }
}

export const Posts = (props) => {
  if(!props.list) return null;

  const items = props.list
      .map(item => <li key={item.id}>{item[props.field]}</li>);

  return props.numered ? <ol>{items}</ol> : <ul>{items}</ul>;
};


export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: '',
    }
  };

  getPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  getList() {
    const items = this.props.list
      .map(item =>
        <li key={ item.id }>
          <a
            onClick={() => { this.getPosts(item.id) }}
            href='javascript:void(0)'
          >
            { item[this.props.field] }
          </a>
        </li>
      );

    return this.props.numered ? <ol>{items}</ol> : <ul>{items}</ul>;
  }

  render() {
    return (
      <>
        {this.getList()}
        <Posts field="body" list={ this.state.posts } />
      </>
    )
  }

}

export class Content extends Component {
  constructor(props){
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
        {/* <User firstName="Mark" lastName="Twen" age="14" className="user" />
        <Users users={users} /> */}
        <List list={this.state.users} field="name" />
        <NumbersList odd from="1" to="10" />
        <Counter />
        <Button />
        <TogglePanels />
        <TaskList userName="Philipp" />
      </div>
    );
  }
}
