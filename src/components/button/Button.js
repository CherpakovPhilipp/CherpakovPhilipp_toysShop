import './button.scss';

export class Button extends Component {
  state = {
    isActive: 'active'
  };


  toggleActive = () => {
    this.state.isActive ? this.setState({ isActive: '' }) : this.setState({ isActive: 'active' });
  }

  render() {
    return (
      <div className="buttons">
        <button type="button" onClick={this.toggleActive}>Toggle Class</button>
        <span className={this.state.isActive} />
      </div>
    );
  }
}
