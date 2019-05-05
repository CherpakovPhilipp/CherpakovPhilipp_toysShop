import './input.scss';

class Input2 extends Component {
  state = {
    inputText: '',
    callback: null
  };

  changeField = (event) => {
    this.setState({ inputText: event.target.value });
    this.props.getText(this.state.inputText);
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeField}
          className={this.props.className}
        />
      </>
    )
  }
};

const Span = (props) => (
  <>
    <span className={this.props.className}></span>
  </>
);

export class Input extends Component{
  state = {
    inputText: '',
    callback: null,
    hidden: true
  };

  onClick = () => {
    this.setState({ hidden: false })
  };

  onBlur = () => {
    this.setState({ hidden: true })
  }

  getText = (text) => {
    this.setState({ inputText: text })
  }

  render() {
    const { inputText } = this.state;

    return(
      <div
        className="input-block"
        onClick={this.onClick}
        onBlur={this.onBlur}
      >
        <Input2 className={this.state.hidden ? 'hide' : 'show'} getText={this.getText}/>
        <span className={this.state.hidden ? 'show' : 'hide'}>{inputText}</span>
      </div>
    )
  }
}
