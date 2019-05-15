import './navigation.scss';
import logoImg from './assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '', icon: 'home', auth: false },
  { label: 'Home', path: '', icon: 'home', auth: true },
  { label: 'Shop', path: 'categories', icon: 'list-alt', auth: false },
  { label: 'Categories', path: 'categories', icon: 'list-alt', auth: true },
  { label: 'Products', path: 'products', icon: 'shopping-bag', auth: true },
  { label: 'Contacts', path: 'contacts', icon: 'map-signs' }
];

export const Navigation = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/"><img src={logoImg} alt="logo"/></Link>
      </li>
      {navLinks.map(item => (
        <li key={item.label}>
          <NavLink to={`/${item.path}`}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
