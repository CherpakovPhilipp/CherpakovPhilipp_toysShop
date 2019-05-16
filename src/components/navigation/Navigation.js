import './navigation.scss';

import { Link, NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', path: '', icon: 'home', auth: false },
  { label: 'Home', path: '', icon: 'home', auth: true },
  { label: 'Shop', path: 'categories', icon: 'list-alt', auth: false },
  { label: 'Categories', path: 'categories', icon: 'list-alt', auth: true },
  { label: 'Products', path: 'products', icon: 'shopping-bag', auth: true },
  { label: 'Contacts', path: 'contacts', icon: 'map-signs' }
];

export const Navigation = ({ user, onLogout }) => {

  return (
    <div className="navigation">
    </div>
  )
};
