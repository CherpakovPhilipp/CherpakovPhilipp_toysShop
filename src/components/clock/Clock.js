import './clock.scss';

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      time: null
    };
  }

  getTime() {
    this.timeInterval = setInterval(() => {
      this.setState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  componentDidMount() {
    this.getTime();
  }

  render() {
    return (
      <div className="clock">
        <time className="date">{this.state.date}</time>
        <time className="time">{this.state.time}</time>
      </div>
    );
  }
}
