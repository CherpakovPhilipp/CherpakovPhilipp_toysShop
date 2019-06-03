import './textBlock.scss';

export class TextBlock extends Component {
  state = {
    inputText: this.props.initialText,
    editable: this.props.inEdit || false
  };

  componentDidUpdate(prevProp) {
    const { initialText, inEdit } = this.props;

    if (prevProp.initialText !== initialText) this.setState({ inputText: initialText });

    if (prevProp.inEdit !== inEdit) this.setState({ editable: inEdit });
  }

  onClick = () => {
    const { onClick } = this.props;

    if (!this.state.editable && onClick) onClick(); // если в пропсах есть атрибут onClick - запускаем его

    this.setState({ editable: true });
  };

  onBlur = () => {
    this.setState({ editable: false });
    if (this.props.onTextEdit) this.props.onTextEdit(this.state.inputText);
  }

  changeField = (event) => {
    this.setState({ inputText: event.target.value });
  }

  render() {
    const { inputText, editable } = this.state;
    let fieldHTML;

    if (editable) {
      fieldHTML = (
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeField}
          onBlur={this.onBlur}
          autoFocus
        />
      );
    } else {
      fieldHTML = (
        <span className="output">
          {inputText}
        </span>
      );
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
