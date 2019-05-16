import './navigation.scss';
import logoImg from './assets/images/logo.png';

import { Link, NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', path: '', icon: 'home', auth: false },
  { label: 'Home-auth', path: '', icon: 'home', auth: true },
  { label: 'Shop', path: 'categories', icon: 'list-alt', auth: false },
  { label: 'Categories', path: 'categories', icon: 'list-alt', auth: true },
  { label: 'Products', path: 'products', icon: 'shopping-bag', auth: true },
  { label: 'Contacts', path: 'contacts', icon: 'map-signs' }
];

export const Navigation = ({ user, onLogout }) => {
  const mainNavLinks = user ?
    links.filter(item => {
      if (item.auth === true || item.auth === undefined) {
        return (
          <li key={item.label}>
            <NavLink to={`/${item.path}`}>{item.label}</NavLink>
          </li>
        )
      }
    })
  :
    links.filter(item => {
      if (item.auth === false || item.auth === undefined) {
        return (
          <li key={item.label}>
            <NavLink to={`/${item.path}`}>{item.label}</NavLink>
          </li>
        )
      }
    })

  const userNavLinks = user ?
      <>
        <span>{user}</span>
        <button onClick={onLogout}>Logout</button>
      </> 
    :
      <>
        <Link to="/login">Log in </Link>
        <span>/</span>
        <Link to="/registration"> Register</Link>
      </>
    
  return (
    <div className="navigation">
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/"><img src={logoImg} alt="logo"/></Link>
          </li>
          {
            mainNavLinks.map(item => (
              <li key={item.label}>
                <NavLink to={`/${item.path}`}>{item.label}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
      <nav className="user-nav">
        {userNavLinks}
      </nav>
    </div>
  )
};
