import './navigation.scss';
import logoImg from './assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

export const Navigation = ({ list = [] }) => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/"><img src={logoImg} alt="logo"/></Link>
      </li>
      {list.map(item => (
        <li key={item}>
          <NavLink to={`/${item}`}>{item}</NavLink>
        </li>
      ))}
      <li>
        <Link to="/login">
          Sign In
        </Link>
      </li>
    </ul>
  </nav>
);
