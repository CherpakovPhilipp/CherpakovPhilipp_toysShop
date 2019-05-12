import { Aside } from '../aside';
import { Content } from '../content';

import './main.scss';

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <main className="main">
          <Content />
        </main>
      </div>
    );
  }
}
