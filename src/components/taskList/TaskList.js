import './taskList.scss';

export class TaskList extends Component {
  state = {
    tasks: 0,
    done: 0,
    inProgress: 0,
    waiting: 0,
  };

  render() {
    const { tasks, done, inProgress, waiting } = this.state;
    return (
      <div className="task_list">
        <h1>

Hello,
          { this.props.userName }
        </h1>
        <br />
        <p>

You have
          <b>{ tasks }</b>
          {' '}

tasks
        </p>
        <p>

Done:
          <b>{ done }</b>
        </p>
        <p>

In progress:
          <b>{ inProgress }</b>
        </p>
        <p>

Waiting:
          <b>{ waiting }</b>
        </p>
        <br />
        <a href="/Tasks">Go to the tasks list</a>
      </div>
    );
  }
}
