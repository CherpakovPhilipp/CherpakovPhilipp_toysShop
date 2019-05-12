import './content.scss';

export class Content extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
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
      </div>
    );
  }
}
