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
        <p>Hello, { this.props.userName }</p>
        <br/>
        <p>You have <b>{ this.state.tasks }</b> tasks</p>
        <p>Done: <b>{ this.state.done }</b></p>
        <p>In progress: <b>{ this.state.inProgress }</b></p>
        <p>Waiting: <b>{ this.state.waiting }</b></p>
        <br/>
        <a href="/Tasks">Go to the tasks list</a>
      </>
    );
  }
}
