import { Navigation } from '../navigation';
import { Greeting } from '../../pages/greeting';

import './header.scss';

const menuItems = ['Home', 'Shop', 'product-info'];

export const Header = props => (
  <header className={`${props.theme} header`}>
  <div className="container">
    <Navigation list={menuItems} />
    </div>
  </header>

);
