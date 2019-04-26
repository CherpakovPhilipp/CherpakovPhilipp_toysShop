import { Posts } from '../posts';

import './list.scss';

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: '',
    };
  }

  getPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  getList() {
    const items = this.props.list
      .map(item => (
        <li key={item.id}>
          <a
            onClick={() => { this.getPosts(item.id); }}
            href="javascript:void(0)"
          >
            { item[this.props.field] }
          </a>
        </li>
      ));

    return this.props.numered ? <ol className="users_list">{ items }</ol> : <ul className="users_list">{ items }</ul>;
  }

  render() {
    return (
      <>
        { this.getList() }
        <Posts field="body" list={this.state.posts} />
      </>
    );
  }
}
