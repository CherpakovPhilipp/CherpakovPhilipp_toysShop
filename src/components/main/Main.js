import { Aside } from '../aside';
import { Content } from '../content';

import './main.scss';

export class Main extends Component {
  render() {
    const { user } = this.props;

    return (
      <main className="main">
        <Aside />
        <Content />
        <p>{user||'Hi'}</p>
      </main>
    );
  }
}
