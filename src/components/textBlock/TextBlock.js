import './textBlock.scss';

export class TextBlock extends Component {
  state = {
    inputText: this.props.initialText,
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
    let fieldHTML;

    if (hidden) {
      fieldHTML = (
        <span className="output">
          {inputText}
        </span>
      )
    } else {
      fieldHTML = (
        <textarea
            name="text"
            value={this.state.inputText}
            onChange={this.changeField}
            onBlur={this.onBlur}
            autoFocus
          >
        </textarea>
      )
    }

    return (
      <form
        className="input-block"
        onClick={this.onClick}
      >
        {fieldHTML}
      </form>
    );
  }
}
