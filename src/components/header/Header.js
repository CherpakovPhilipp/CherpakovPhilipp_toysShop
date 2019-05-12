import { Navigation } from '../navigation';
import { Greeting } from '../greeting';

import './header.scss';

const menuItems = ['Home', 'Shop', 'Contacts'];

export const Header = props => (
  <header className={`${props.theme} header`}>
  <div className="container">
    <Navigation list={menuItems} />
    </div>
  </header>

);
