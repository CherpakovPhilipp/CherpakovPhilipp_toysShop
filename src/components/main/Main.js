import { Aside } from '../aside';
import { Content } from '../content';

import './main.scss';

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Aside />
        <Content />
      </main>
    );
  }
}
