import { Navigation } from '../navigation';
import { Link } from 'react-router-dom';

import './header.scss';

export const Header = ({ user, onLogout }) => (
  <header className="header">
    <div className="container">
      <Navigation />
      {
        user ?
        <div>
          <mark>{user}</mark>
          <button
            onClick={onLogout}
          >
            Logout
          </button>
        </div> :
        <>
          <Link
            to="/login"
          >
            Log in
          </Link>
          <span> / </span>
          <Link
            to="/registration"
          >
            Register
          </Link>
        </>
      }
    </div>
  </header>

);
