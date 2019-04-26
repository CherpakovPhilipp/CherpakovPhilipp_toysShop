import './counter.scss';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  clickHandler() {
    this.setState({ counter: this.state.counter + 1 }, () => { console.log(this.state.counter); });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={ev => this.clickHandler(ev)}>Click Me!</button>
        <span>{this.state.counter}</span>
      </div>
    );
  }
}
