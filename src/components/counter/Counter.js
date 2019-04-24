import './counter.scss';

export class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.counter = 0;
  // }

  state = {     //здесь мы не используем конструктор (используя плагин для babel "@babel/plugin-proposal-class-properties") 
    counter: 0  //это равносильно this.state = 0;
  }; 
 

  clickHandler = () => {
    console.log(this.state.counter);
    this.setState(
      {
        counter: this.state.counter + 1
      }
    );
  };
  
  render() {
    const { counter } = this.state;

    return (
      <>
        <button 
          className="counter"
          onClick={this.clickHandler}
        >
          Click Me!
        </button>
        <span>{counter}</span>
      </>
    );
  };
}