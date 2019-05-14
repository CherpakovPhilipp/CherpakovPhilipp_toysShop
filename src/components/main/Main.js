import { Aside } from '../aside';
import { Content } from '../content';

import './main.scss';

export const Main = ({ children }) => {
  return (
    <div className="container">
      <main className="main">
        {children}
        {/* <Content /> */}
      </main>
    </div>
  );
}
