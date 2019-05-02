import { Navigation } from '../navigation';
import { Greeting } from '../greeting';

import './header.scss';

const menuItems = ['Home', 'Products', 'Contacts'];

export const Header = props => (
  <header className={`${props.theme} header`}>
    <Greeting name="Philipp" />
    <Navigation list={menuItems} />
  </header>
);
