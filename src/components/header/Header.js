import { Navigation } from '../navigation';
import { Greeting } from '../greeting';

import './header.scss';

const menuItems = ['Home', 'Products', 'Contacts'];

export const Header = () => (
  <header className="header">
    <Greeting name="Philipp" />
    <Navigation list={menuItems} />
  </header>
);
