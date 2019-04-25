export class TogglePanels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      butText: 'Show',
      panelClass: ''
    };
  }

  tooglePanel() {
    if (!this.state.panelClass) {
      this.setState({
        butText: 'Hide',
        panelClass: 'active'
      });
    } else {
      this.setState({
        butText: 'Show',
        panelClass: ''
      });
    }
  }

  render() {
    return (
      <div className="tab_panels">
        <button onClick={() => { this.tooglePanel(); }}>{this.state.butText}</button>
        <p className={this.state.panelClass}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed mauris ut augue eleifend iaculis. Integer odio augue, dapibus nec quam ut, ornare eleifend risus. Suspendisse eu mi vel est scelerisque interdum eu eu est. Morbi malesuada condimentum urna, vel aliquet lacus feugiat eu. Quisque consequat elit libero. Etiam rhoncus sem facilisis eros gravida, et tristique ipsum rutrum. Mauris ultricies in odio non auctor. Fusce dapibus libero a sapien laoreet tempus. Mauris cursus nibh ut orci dignissim rhoncus. Nulla a mi ut dolor sodales pharetra. Aenean eget aliquam mi. Integer mattis mi non lacus porta malesuada. Ut neque mi, vulputate vel purus sit amet, tempor dignissim ante. Nullam vitae efficitur neque, sed pretium magna. Phasellus bibendum placerat purus ut tincidunt.</p>
      </div>
    );
  }
}
