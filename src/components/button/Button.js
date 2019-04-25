export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'active'
    };
  }

  toggleActive() {
    this.state.isActive ? this.setState({ isActive: '' }) : this.setState({ isActive: 'active' });
  }

  render() {
    return (
      <>
        <button type="button" onClick={() => { this.toggleActive(); }}>Toggle Class</button>
        <span className={this.state.isActive} />
      </>
    );
  }
}
