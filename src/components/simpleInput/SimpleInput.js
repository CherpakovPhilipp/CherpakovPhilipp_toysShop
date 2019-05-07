import './simpleInput.scss';

export class SimpleInput extends Component {
  state = {
    inputText: '',
    hidden: true
  };

  onClick = () => {
    this.setState({ hidden: false });
  };

  onBlur = () => {
    this.setState({ hidden: true });
    this.props.showInputText(this.state.inputText);
  }

  changeField = (event) => {
    this.setState({ inputText: event.target.value });
  }

  render() {
    const { inputText, hidden } = this.state;

    return (
      <form
        className="input-block"
        onClick={this.onClick}
      >
        <h2>input/output</h2>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeField}
          onBlur={this.onBlur}
          className={hidden ? 'hide' : 'show'}
          autoFocus
        />
        <span className={`${hidden ? 'show' : 'hide'} output`}>
          {inputText}
        </span>
      </form>
    );
  }
}
