import './clock.scss';

export class Clock extends Component {
  state = {
    date: '',
    time: ''
  };

  getTime() {
    this.timeInterval = setInterval(() => {
      const date = new Date();

      this.setState({
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
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
    const { date, time } = this.state;

    return (
      <div className="clock">
        <time className="date">{date}</time>
        <time className="time">{time}</time>
      </div>
    );
  }
}
