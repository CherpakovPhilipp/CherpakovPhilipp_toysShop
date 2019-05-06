import './input.scss';

class Input extends Component {
  state = {
    inputText: '',
    callback: null
  };

  changeField = (event) => {
    this.setState({ inputText: event.target.value });
    this.props.setInputText(this.state.inputText);
  }

  conponentDidMount() {
    document.querySelector('.input-block').focus();
  }

  render() {
    return (
      <>
        <h2>input/output</h2>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeField}
          onBlur={this.props.callback}
          className={this.props.className}
        />
      </>
    );
  }
}

const Span = ({ className, text }) => (
  <>
    <span className={className}>{text}</span>
  </>
);

export class SimpleInput extends Component {
  state = {
    inputText: '',
    callback: null,
    hidden: true
  };

  onClick = () => {
    this.setState({ hidden: false });
  };

  onBlur = () => {
    this.setState({ hidden: true });
  }

  setInputText = (text) => {
    this.setState({ inputText: text });
  }

  render() {
    const { inputText, hidden } = this.state;

    return (
      <form
        className="input-block"
        onClick={this.onClick}
        onBlur={this.onBlur}
      >
        <Input
          className={hidden ? 'hide' : 'show'}
          setInputText={this.setInputText}
          callback={this.props.callback}
        />
        <Span
          className={`${hidden ? 'show' : 'hide'} output`}
          text={inputText}
        />
      </form>
    );
  }
}
