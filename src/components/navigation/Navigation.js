import './navigation.scss';
import { Link, NavLink } from 'react-router-dom';
import { server } from '../../services';

const links = [
  { label: 'Home', path: '', icon: 'home', auth: false },
  { label: 'Home', path: '', icon: 'home', auth: true },
  { label: 'Shop', path: 'categories', icon: 'list-alt', auth: false },
  { label: 'Categories', path: 'categories', icon: 'list-alt', auth: true },
  { label: 'Products', path: 'products', icon: 'shopping-bag', auth: true },
  { label: 'Contacts', path: 'contacts', icon: 'map-signs' }
];

export const Navigation = ({ user, onLogout }) => {
  const logoutHandler = (e) => {
    e.preventDefault();
    server.get('logout').then(() => onLogout(null));
  };

  let mainNavLinks = links.filter(item => {
    return user ? item.auth === true : item.auth === false || item.auth === undefined;
  });

  const userNavLinks = user ?
      <>
        <span>{user}</span>
        <Link to='/' onClick={logoutHandler}>Logout</Link>
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
            <Link to="/"><img src="/images/logo.png" alt="logo"/></Link>
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
